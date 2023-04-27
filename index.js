const https = require('https'); 
const fs = require('fs');
const decompress = require("decompress");

function downloadRepo(repo, author, branch) {
  const file = fs.createWriteStream("files/" + author + "-" + repo + "-" + branch + ".zip");

  // Making an empty folder so the repository won't be donwloaded more than one time
  fs.mkdirSync("files/" + repo + "-" + branch + "-loading");

  // Downloading the zip file
  const request = https.get("https://codeload.github.com/" + author + "/" + repo + "/zip/" + branch, function(response) {
    response.pipe(file);

    file.on("finish", () => {
      // When the download finishes
      file.close();
      console.log("Downloaded repository " + repo + " created by " + author + " at branch " + branch + ". ");

      // Unpacking the zip file
      decompress("files/" + author + "-" + repo + "-" + branch + ".zip", "files")
        .then((files) => {
          // Removing the empty folder and adding the new one
          fs.unlink("files/" + author + "-" + repo + "-" + branch + ".zip", () => {}); 
          fs.rmSync("files/" + repo + "-" + branch + "-loading", { recursive: true, force: true });
          console.log("Decompressed repository " + repo + " created by " + author + " at branch " + branch + ". ");

          // When the folder has no content, it means that the repository doesn't exist. In that case the script creates an error file in the folder
          if (!fs.existsSync("files/" + repo + "-" + branch)) {
            fs.rmSync("files/" + repo + "-" + branch + "-loading", { recursive: true, force: true });
            fs.mkdirSync("files/" + repo + "-" + branch);
            fs.writeFileSync("files/" + repo + "-" + branch + "/error.txt", "Error: Repository not found. "); 
          }
        }); 
    });
  }); 
}

const express = require('express');
const app = express();
const http = require('http'); 
const server = http.createServer(app);

// Getting the index of the page
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// When running a repository
app.get('/run/*', (req, res) => {
  var repo = req.originalUrl.split("/")[2]; 
  var author = req.originalUrl.split("/")[3]; 
  var branch = req.originalUrl.split("/")[4]; 
  var fileName = ""; 
  
  if (req.originalUrl.split("/").length >= 6) {
    fileName = req.originalUrl.split("/").slice(5, req.originalUrl.split("/").length).join("/"); 
  }
  if (fileName === "") {
    fileName = "index.html"; 
  } 

  console.log("Requested loading file ''" + "files/" + repo + "-" + branch + "/" + fileName + "'"); 

  if (fs.existsSync("files/" + repo + "-" + branch)) {
    if (fs.existsSync("files/" + repo + "-" + branch + "/error.txt")) {
      if (String(fs.readFileSync("files/" + repo + "-" + branch + "/error.txt")) === "Error: Repository not found. ") {
        res.sendFile(__dirname + "/repo-not-found.html"); 
      }
      else {
        if (fs.existsSync("files/" + repo + "-" + branch + "/" + fileName)) {
          res.sendFile(__dirname + "/files/" + repo + "-" + branch + "/" + fileName); 
        }
        else {
          res.sendFile(__dirname + "/file-not-found.html"); 
        }
      }
    }
    else {
      if (fs.existsSync("files/" + repo + "-" + branch + "/" + fileName)) {
        res.sendFile(__dirname + "/files/" + repo + "-" + branch + "/" + fileName); 
      }
      else {
        res.sendFile(__dirname + "/file-not-found.html"); 
      }
    }
  }
  else {
    var toSend = String(fs.readFileSync("loading.html"));
    toSend = toSend.replaceAll("#repo#", repo); 
    toSend = toSend.replaceAll("#branch#", branch); 
    toSend = toSend.replaceAll("#author#", author); 
    
    res.send(toSend);

    if (!fs.existsSync("files/" + repo + "-" + branch + "-loading")) {
      downloadRepo(repo, author, branch); 
    }
  }
}); 

// Sending style
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
}); 

// Wrong url
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/site-not-found.html");
});

server.listen(3000, () => {});
