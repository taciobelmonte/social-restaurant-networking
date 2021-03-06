## Social Restaurant Networking

## How to get started

To setup this app, you will need to follow the instructions below:

1 - Navigate to the app folder and then run `npm install` to install all project dependencies. You will need to have node installed to run npm.

2 - Start react app by running `npm start` inside folder app.

3 - Open another terminal window. Then, navigate to server folder and run `npm start` to start the development server. 

It's done! You should have Social Restaurant Networking running straight way...

## Technologies
To build this app, I decided to use the following technologies:

-React
-Redux
-Bootstrap
-Bourbon
-Neat
-Nodejs
-Express.js

## Architecture

The decision to create this small app was thinking in a situation where people that uses Skip the dishes services want to interact between them, sharing knowledge, news, comments and also being able to vote if they like some post/comments.

A third party template based in bootstrap (css/html) has been used in this project in terms of getting a better user experience when navigating through it.

In addition, some changes in the css has been done using SASS pre-processor along with Bourbon and Neat

The web app has a main sidebar, with information about all three categories (Food, Restaurants, Couriers).

When clicking on each link, it will display all posts created for that category.

In the sidebar has also a search input, which is possible to search any post by title, content or category.

Redux has been used to manipulate all data used in the application. A store has been designed for this purpose, allowing data access through each component, instead of drilling data via props from high orders components to its children.

## Screenshots
![alt text](https://raw.githubusercontent.com/taciobelmonte/social-restaurant-networking/master/app/public/screenshots/screen1.jpg)

![alt text](https://raw.githubusercontent.com/taciobelmonte/social-restaurant-networking/master/app/public/screenshots/screen2.jpg)

![alt text](https://raw.githubusercontent.com/taciobelmonte/social-restaurant-networking/master/app/public/screenshots/screen3.jpg)

## Limitations
This app is a limited version. The focus on this project was pretty much to show the ability to use React and Redux.

Thus, those categories displayed in the app have been hard coded in the server side (can be found at server folder).

In addition, I have used a nodejs server boilerplate that I have built in another opportunity. So, this project has been mainly focused in the React and Redux use.

Van Hackaton 2018

Developed by @Tacio Belmonte - 2018