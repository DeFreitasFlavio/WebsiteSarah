git add .

if "%1" == "" or "%1" < 4 (
    echo "Please enter a commit message"
) else (
    git commit -m %1

    rem git push
    color 00
    echo "Done"
)

