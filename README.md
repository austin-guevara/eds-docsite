# Email Design System Docsite Master

Thanks to the beauty of technology, you can now quickly and easily create and update your email documentation site. Don’t panic! Once you’ve done this once or twice, it will save you a ton of time in the long run. And it will provide a lot of value by providing a source of truth to customers.

This is potentially a task that the TP on the account could help with (they may have a familiarity with Github and Heroku already).

## Prerequisites

You’ll need to create:

* [A Github account](https://github.com/)
* [A Heroku account](https://signup.heroku.com/)

(Feel free to use your Salesforce email address for both).

## First Time Site Creation

### Create the Repo

A “repository” in Github is basically just a project. Your first step is to copy the “Master” repository, creating one for your customer’s brand. To do so:

**From your logged in Github account, hit the “+” button in the top right corner.**

* Choose “New Repository” from the dropdown
* Leave “Owner” selected as yourself and then enter a name.
    * For consistency, it makes sense to name this the same thing as whatever your URL will be. For example: `salesforce-email-design-system` or `sf-eds`. Something short and memorable. 
    * The end URL will look like `salesforce-email-design-system.heroku.com`
    * This name should only contain lowercase letters, numbers, and dashes. Max 70 characters.
* You can leave the description field blank.
* Select “**private**” (that will keep your repo hidden from the public).
* You can leave the rest of the fields as-is.

**On the resulting page, choose the very bottom button, “Import code.”**

* In the resulting field, paste in the URL of the “Master” repository: https://github.com/austin-guevara/eds-docsite
* Then select “Begin import”
* This should take about a minute for all the files to copy into your new repo (you’ll get an email when the process is complete).

You’ve created your repo! Congratulations.

### **Updating Images**

Now, it’s time to add the images that make this docsite look at home with your customer’s brand.

From the front page of your repository, navigate to **`/src/assets/`**, where you will find two images that need to be replaced: `Hero_Image.jpg` and `Sidebar_Logo.png`

**`Hero_Image.jpg`**

* This is the hero image on the front page of your docsite. Grab a brand-friendly image that you have already, or find one on [Unsplash](https://unsplash.com/). 
* In Photoshop, overlay a dark brand color at ~80% opacity. Then save it out at the same dimensions as the original (1440x800). 65% image quality recommended for fast load times.
* Back in Github, click on the image name, and hit the trash can icon on the image preview page. Next, hit the green “Commit changes” button.
* You will end up back in the `/assets/` folder. From here, hit “Upload files” near the top-right of the page. Upload your newly created hero image and hit “Commit changes.”

`**Sidebar_Logo.png**`

* Same process here. Just different limitations. Depending on the height/width of your brand’s logo, you’ll want to use a different width. The height will be calculated automatically.
* Recommended logo width: 75px–200px. Don’t go larger than 280px. You can use double the resolution for a higher quality image (which would mean your image file is between 150px–400px).
* Make sure that you set the `logoSize` field equal to the width of your created image in the JSON file (you will see this later, don’t worry about it yet).

### Filling in Your Content

The content of your website (all the release notes, style guidelines, templates and components) is all stored in a single file. The format of this file is JSON (JavaScript Object Notation). All you need to know is that it is a data file with a `.json` extension.

To begin adding in your content, navigate in your repository to **`/src/views/data`**, where you will find **`shared.json`**. Click on this file, then hit the edit icon (pen) at the top right to begin editing it.

If you’re not familiar with the JSON format, you don’t need to edit the code directly. Instead, copy the contents of the JSON file, open a tab in your browser and navigate to https://jsoneditoronline.org/, and paste it into the left box.

Once you hit the right arrow (in the top middle, between the two boxes), you will see a list of “objects” appear in the righthand box. Think of these as folders. And inside the folders, you either have more folders, or fields of information.

Open each folder and edit the fields (the parts in green text) with your brand’s information. For example, if the site was for Sony Interactive Entertainment: the first field is labeled “brandName,” so you’d replace “Salesforce Marketing Cloud” with “Sony Interactive Entertainment.” The second field is labeled “brandShort,” so you’d replace “Salesforce” with “SIE” (if your brand’s name is already short, you can just repeat the full name in this field).

Most fields should be self-descriptive. Make sure you use the same format of the example data in each field. So for “logoSize,” if your uploaded logo is 300px, and you designed it @2x, then you’d enter “150px” in the field.

Some folders, such as those nested under releaseUpdates, need to be duplicated to make room for more (such as each time you update the docsite and include notes about what’s new). To easily do this, click the grey box on the lefthand side by the folder name, and select “duplicate.” You can also use the dot grid icon next to the box icon to re-arrange the order of the folders.

When editing components, make sure you specify whether an object is an element or a module. Also, make sure that each component has a unique id.

When adding in code to the template or component objects, you’ll need to do some quick formatting first. Copy the code for the template/component, then go to https://kangax.github.io/html-minifier/ and paste the code into the top box. 

* In the list of options on the righthand side, first hit the Select “None” button at the bottom. 
* Then, check “Collapse whitespace”
* Next, in the field for “Quote character,” enter " (straight double quote)
* Finally, hit the “minify” button, and copy the resulting code (now compressed) into the htmlCode field of your component in the JSON file.

When you’ve finished making all of your edits, you can hit the left-facing arrow (make sure choose the right one!) to generate the full JSON file. Copy this, paste it back into your Github window, and then hit “Commit changes.”

### Deploy to Heroku

You made that Heroku account already, right? Great. Are you logged in? Awesome.

Heroku is the platform that your docsite will be hosted on. Instead of doing all the manual uploads of images and HTML files to Classic Content or Cloudpages, we can have Heroku pull everything in automatically from our Github repository.

To connect your Github repository with your Heroku account, press this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](_https://heroku.com/deploy_)

On the “Create New App” page that you land on, provide a name.

* For consistency, it makes sense to name this the same thing as whatever your Github repository was. For example: `salesforce-email-design-system` or `sf-eds`. Something short and memorable. 
* The end URL will look like `salesforce-email-design-system.heroku.com`
* This name should only contain lowercase letters, numbers, and dashes. Max 70 characters.

You can leave region as “United States,” and enter a username and password if you want to require authentication on your site (this is not usually required).

Next, hit “Deploy App.” Heroku will grab all your Github files and begin to build your website based on that JSON file. It will take a minute for Heroku to build it (you will see the logs as it runs).

One more step! Your website isn’t “running” yet. Once you see, “Your app was successfully deployed,” hit “Manage App.” Then, in the top right, click “More” and then “Run console.”

In the field that opens from the bottom of the screen, type `npm run dev` and hit “Run.” Once you see the following, you have successfully run your app:

```
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://172.18.50.234:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
```

Now close that panel and hit “Open app.” Ta-da!

## Making Updates

To update your site, just follow the same steps for editing the JSON file. Make sure to add a new release update object and increment the latest version number (more recent versions should be first).

When you’re done making changes, go back to Heroku (not via pressing the button again; this time, just go to [heroku.com](http://heroku.com/)). From your dashboard, click on the name of your project. Then hit the “Deploy” tab.

Next to “Deployment method,” click on GitHub. If your Github account does not show up as linked, follow the steps to connect your Github account with your Heroku account. When that is completed, you will see your Github account username listed in the dropdown. Enter the exact name of the repo in the field (e.g. “`salesforce-email-design-system`”) and hit “Search.”

Just one item should result (your repository), for which you’ll click “Connect.” Now, at the bottom, next to “Manual deploy,” make sure that “Choose a branch to deploy” says “master” and hit “Deploy Branch.”

Heroku will build your app again. When this is done, click “More” in the top right and then “Run console.” In the field that opens from the bottom of the screen, type `npm run dev` and hit “Run.” When you see that same “Access URLs” text, you are good to go! Refresh your site and you will see the changes.

(The next time you need to update your site, when you log into Heroku, you’ll already see your branch with a button that says “Deploy Branch” ready to go).

## Help

Reach out to me on Quip if you need any assistance! Happy to schedule 1:1s to walk through your setup.