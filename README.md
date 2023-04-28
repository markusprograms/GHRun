# GHRun
[GHRun](https://ghrun.markus1234.repl.co/) is a tool to run Github repositories online without downloading any files. <br>
Any user can run any repository even when the user doesn't own it. <br>
This tool can be used as a simple webhosting. 

## How to run a repository
 - **Standart method**: 
    1. Visit the website, [https://ghrun.markus1234.repl.co/](https://ghrun.markus1234.repl.co/)
    2. In the `repository name` field put the name of the repository that you want to run. 
    3. Write author or organization that owns the repository in the second input field. 
    4. Don't forget to select a branch to run. 
    5. The last field is name of the file, that will be evaluated. For example, if you want to run a website, where the `index.html` file is in folder `public`, you put there `public/index.html`. 
    6. Wait until the server set up the repository. 
    7. Enjoy the program! 
    <br>
 - **Absolute links**: <br>
    To get a link to run a repository, replace this with your data: <br>
    https://ghrun.markus1234.repl.co/run/REPOSITORY/AUTHOR/BRANCH/FILE<br>
    <br>
    The **FILE** is name of the file that will be evaluated. It can be for example `public/scripts/index.html`<br>
<br>
Once you request running a repository, the server will cache it for some time, so when you run the same repository again, you won't have to wait. 

## Known problems and how to avoid them
When you have a HTML file, that requires loading another file, for example `style.css` and you import it like `<link rel="stylesheet" href="/style.css">`, you might notice that the file doesn't load. <br>
That's because each repository has it's own direcory, which is saved on the server (for example `run/myrepo/myusername/branch`). When you request loading a file and you add a '/' before it, it loads the file from `https://ghrun.markus1234.repl.co/style.css` but the file is at `https://ghrun.markus1234.repl.co/run/myrepo/myusername/branch/style.css`. <br>
### Solution
Just replace `/style.css` with `style.css`. Don't load files from links that start with '/'. 

## Feedback
Tell me, how do you like this project in Discussions. 
All feedbacks are welcome! 
