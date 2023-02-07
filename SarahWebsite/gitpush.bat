@echo off

set message=%1
set len=%message:~0,-1%

if "%message%"=="" (
    echo Please provide a commit message
    exit /b
)


rem add all files to git
git add .

rem commit the changes with a message
git commit -m "%message%"

rem push the changes to the remote repository
git push

@echo "Done! :)"