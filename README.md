# Initial Server

This repo is the initial architecture for a server.

## File Structure

All the files except env are inside the src folder. Inside the src folder, have config.js, index.js and six folders. According to the flow, explanations are the following.

### index.js

Create database connection and server starting.

### config.js

Processing and configuring env.

### services

- Express server functionalities
- MongoDB functionalities

### middlewares

Currently, two middlewares are available. errorHandler.js for handling errors and jwt.js for token validation.

### routes

In this folder structure express.js redirecting routes to routes/index.js. Then index.js redirects to the relevant route file. If there hasn't been any validation, request passing to controllers.

Eg: .../auth/login

- express.js > routes/index.js > routes/auth.js

### validations

When a request comes through a path, that request can validate. If validation is successful, pass it to controllers.

Eg: login request validation

### controllers

Handle and serve requests.

### models

Mongoose Schemas for MongoDB.

## Available Process

Here fully coded processes are available for user registration and login. You have to enter the MONGO_URI and SECRET in the env file.
