# mongo-express-node-template
## Intro 
This template is designed to help kick start Node.js applications that use Express.js, MongoDB, and Passport.js. Currently the application is set up to use ejs as the view engine, but can be adapted to use either React or Angular if needed by the end user. I have layed out the file structure below to help those that wish to use this template get started as quick as possible. 

I personally use this template and have listed the projects that use it at the end of this article. 

## Hot Links 
- [Getting Started](#Getting-Started)
- [File Structure](#File-Structure)
    - [Api](#api)    
    - [Config](#config)
    - [.env](#.env)
    - [Controllers](#controllers)
    - [Models](#models)
    - [Public](#public)
    - [Routes](#routes)
    - [Views](#views)
    - [Index.js](#index.js)
- [Projects](#projects)
- [Final Notes](#final-notes)

## Getting Started
Whether you cloned, forked, or downloaded this repository, the first thing you should do is to run `npm install` to get the dependencies installed. After the dependencies are installed, you are ready to run `npm run start` or `node index.js`. Both commands run the same script to get the application started. The default port is set the `8000`. However, you are able to use a environment variable to use a different port, more on that below.  

## File Structure 
### Api
This folder is used to separate your API routes from your view routes. By requiring your controller in this file, you are able to define your API routes for your client to consume. 
### Config
Within the config folder there is a file called `keys.js`. Currently, the file is set up to export your MongoURI connection string. Add your connection string here to allow your application to communicate with your MongoDB instance. Other keys can be added here and accessed throughout the program when needed. 
### .env
An additional way to hold your keys and secrets for your application is to take advantage of the [dotenv dependency](https://www.npmjs.com/package/dotenv). Your keys and secrets will be stored in a `.env` file in like this example: 
```
MONGO_URI = MONGO.CONNECTION.STRING.EXAMPLE
API_KEY = API-KEY-EXAMPLE-FOR-FUN1
```
These items are accessed from the `.env` file in this way: `process.env.API_KEY`. Refer to the about package documentation link for more information. 

**Be Sure to add your `.env` to your `.gitignore` file so your keys don't get pushed to your Github.** 
### Controllers
The controllers are where your endpoints logic will be handled. For each object we will create a controller. For example, in a todo list app, we would create a todo item controller and a todo list controller. 
### Models
Here is where we will define our objects for the application. This will use the mongoose library as we define our schema. Here is the link for the documentation for [Mongoose](https://mongoosejs.com/docs/).
### Public
We have two folders inside the public folder. Within this folder we have css and images. These folders are pretty self explanatory. 
### Routes
Routing in an our app is very important, especially if we want protected areas of our application! In the `index.js` file is where routes can be added. For more information on routing see [this](https://expressjs.com/en/guide/routing.html) documentation. 

### Views
Currently this template is set up to use `ejs` as the view engine. There is the option to configure this template to be a server for your React or Angular application. 

### Index.js
Here is where everything in the application is initialized and set up. There is line of code commented out that can be uncommented if you want to use [Passportjs](http://www.passportjs.org/) within your application. It is important to keep this file small, so debugging can be done with little to no headache. 

## Projects 
Here are some projects that I have worked on that have used this template:
- Social Food (WIP)
    - [Live Site](https://fathomless-wildwood-53985.herokuapp.com/) 
    - [Code](https://github.com/cdthomp1/social-food)
- Dev Connector (WIP)
    - Live Site (Coming Soon!)
    - [Code](https://github.com/cdthomp1/devconnector_2.0)
## Final Notes 
This is a constant work in progress. I am updating and clarifying this template weekly. If you have any feedback, please contact me at [my website](https://cameronthompson.io/contact). 