# restaurant-project


# **What did I learn from this project?**
- Learned that you can make your own module that will execute itself to initalize the contents of index page.
- Broke down many building parts of the project into component functions and put them in a different js file and only imported the ones we needed.
- Instead of making my flip_page function which works, there's a easier way of going about it. Which is main_content.replaceChildren();
- Media queries again coming into the rescue when resizing my nav bar since it was made from flex-box.
- In our webpack config file, we used a built-in source map to point out source of truth in errors in different js file even after compiling all js file into one main.js file.
- In our package.json -> "watch": "webpack --watch" to initalize webpack watch and automatically update our site upon making changes to our code instead of running npx webpack everytime we make a change.
