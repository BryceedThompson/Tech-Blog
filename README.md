# Tech-Blog

## Description
The goal of this project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Install
Download the file from my github and install Insomnia!
* [Github Link](https://github.com/BryceedThompson/Employee-Tracker)

## Usage for local hosting
* make sure to create .env file
* Open your terminal in the server.js file.
* Run the command 'npm i' 
* After download open your terminal on the schema.sql file
* log into mysql using your password and then run 'source schema.sql'
* in the server terminal run 'npm run seed'
* run 'npm run start'

```md
WHEN you visit the site for the first time
THEN you are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN you click on the homepage option
THEN you are taken to the homepage
WHEN you click on any other links in the navigation
THEN you are prompted to either sign up or sign in
WHEN you choose to sign up
THEN you are prompted to create a username and password
WHEN you click on the sign-up button
THEN my user credentials are saved and you are logged into the site
WHEN you revisit the site at a later time and choose to sign in
THEN you are prompted to enter my username and password
WHEN you are signed in to the site
THEN you see navigation links for the homepage, the dashboard, and the option to log out
WHEN you click on the homepage option in the navigation
THEN you are taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN you click on an existing blog post
THEN you are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN you enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN you click on the dashboard option in the navigation
THEN you are taken to the dashboard and presented with any blog posts you have already created and the option to add a new blog post
WHEN you click on the button to add a new blog post
THEN you are prompted to enter both a title and contents for my blog post
WHEN you click on the button to create a new blog post
THEN the title and contents of my post are saved and you are taken back to an updated dashboard with my new blog post
WHEN you click on one of my existing posts in the dashboard
THEN you are able to delete or update my post and taken back to an updated dashboard
WHEN you click on the logout option in the navigation
THEN you are signed out of the site
WHEN you are idle on the site for more than a set time
THEN you are able to view posts and comments but you are prompted to log in again before you can add, update, or delete posts

```

## Deployed site
* [Deployed site](https://techblog55-97c994bc9c92.herokuapp.com/)

## Contact
* [Github Link](https://github.com/BryceedThompson)
* [Contact Me](mailto:bryceedthompson@gmail.com)

## Credit
* [Heroku deploy](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)
* [npm documentation on Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MDN Web Docs on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
* [Handlebars.js documentation on built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html#if)

* [Handlebars.js documentation](https://handlebarsjs.com/guide/#what-is-handlebars)
* [MDN Web Docs on MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
* [express-session Official Readme](https://github.com/expressjs/session#cookie)
* [Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html)


