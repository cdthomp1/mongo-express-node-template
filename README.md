# mongo-express-node-template
## Intro 
This template is designed to help kick start Node.js applications that would use MongoDB as a database and Passport.js as an authentication middleware. Currently the application is set up to use ejs as the view engine, but can be adapted to use either React or Angular if needed by the end user. I have layed out the file structure below to help those that wish to use this template get started as quick as possible. 

I personaly use this template and have listed the projects that use it at the end of this article. 

## Hot Links 
- [Getting Started](#Getting-Started)
- [File Structure](#File-Structure)
    - [Api](#api)    
    - [Config](#config)
    - [Controllers](#controllers)
    - [Models](#models)
    - [Public](#public)
    - [Routes](#routes)
    - [Views](#views)
    - [Index.js](#index.js)
- [Projects](#projects)
- [Final Notes](#final-notes)

## Getting Started
Whether you cloned, forked, or downloaded this repository, the first thing you should do is to run `npm install` to get the dependencies installed. After the dependencies are installed, you are ready to run `npm run start` or `node index.js`. Both commands run the same script to get the application started. The default port is set the `8000`. However, you are able to use a envirnment variable to use a different port, more on that below.  

## File Structure 

### Api
This folder is used to seperate your API routes from your view routes. By requiring your controller in this file, you are able to define your API routes for your client to consume. 
### Config
Within the config folder there is a file called `keys.js`. Currently, the file is set up to export your MongoURI connection string. Add your connection string here to allow your application to communicate with your MongoDB instance. Other keys can be added here and accessed throught the program when needed. 
### Controllers
### Models
### Public
### Routes
### Views
### Index.js


## Projects 

## Final Notes 