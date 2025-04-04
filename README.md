# GHRun
![image](/intro/screenshot.png)

GHRun is a free open-source tool for quick **cloning and evaluating GitHub repositories**. 
The server hosts **static files only**, no code is evaluated on the backend. 

## Setup
1. `git clone https://github.com/markusprograms/GHRun`
2. `cd GHRun/src`
3. `npm start`
4. Visit `http://localhost/`

## How to use
Enter the fields with the repository data and click "Run repository". You will be redirected to a loading page and the cloning process will begin. 
The page will be refreshed as soon as the repository is ready. Now you can freely browse the page. 

## Notes
The server cache is purged every 24 hours and every time the script is run. 