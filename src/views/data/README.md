# Editing the JSON file

If you’re not comfortable with editing JSON directly, edit this file with https://jsoneditoronline.org/

For any HTML you add to the file, use [this tool](https://kangax.github.io/html-minifier/) to minify it before pasting into the JSON editor. Make sure you hit “uncheck all,” on the right, then check “whitespace” and enter " (double straight quote) into the quote character field.

## Making updates

The entire documentation site will be generated from this single file. After saving it (by hitting “commit to master”), you simply need to hit “Deploy Branch” in Heroku again, and run the `npm run dev` command when it finishes.