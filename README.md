# GHRun
![image](https://user-images.githubusercontent.com/131605571/236684518-84d4842f-0ceb-4e34-bdba-c16ee949db92.png)

## About GHRun
[GHRun](https://ghrun.markus1234.repl.co/) is a tool to run Github repositories online. <br>
It can be used also as **simple webhosting**.<br>

## How it works
When you press the 'Run' button, the server downloads the repository. It might take a while. <br>
Once finished, you'll be able to view the website. <br>
The repository files are cached on the server for 24 hours, then they'll be downloaded again. 

## How to run a repository
 - **Standart method**: 
    1. Visit the website, [https://ghrun.markus1234.repl.co/](https://ghrun.markus1234.repl.co/)
    2. In the `repository name` field put the name of the repository that you want to run. 
    3. Write author or organization that owns the repository in the second input field. 
    4. Don't forget to select a branch to run. 
    5. The last field is name of the file, that will be evaluated. For example, if you want to run a website, where the `index.html` file is in folder `public`, you put there `public/index.html`. 
    6. Wait until the server downloads the repository. 
    7. Enjoy! 
    <br>
 - **Webhosting**: <br>
    ![image](https://user-images.githubusercontent.com/131605571/236685152-cba9e560-7b51-45b9-be88-4257c6a2374c.png)
    To get a link to run a repository, replace this with your data: <br>
    https://ghrun.markus1234.repl.co/run/REPOSITORY/AUTHOR/BRANCH/FILE<br>
    <br>
    The **FILE** is name of the file that will be evaluated. It can be for example `public/scripts/index.html`<br>
<br>
## Supported files
All file types are supported. No files are evaluated on the server. 

## Report an issue
If you found any problems, please report them in Issues section. 

## Feedback
Send your feedbacks here: [https://github.com/markusprograms/GHRun/discussions/2](https://github.com/markusprograms/GHRun/discussions/2)
