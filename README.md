# react-fastify-todo
To-do application made with React, Fastify, and AWS DynamoDB

To set up this application, follow the steps below.  

## Setting up the AWS DynamoDB

- Create an AWS account and log in to the console
- Create DynamoDB table called `todo`
  - Create `index` attribute as a Number
  - Create `dateCreated` attribute as a String
  - The rest is maintained through the API and the Client

- Create IAM user
  - Grant AWS DynamoDB access
  - Save ACCESS KEY and SECRET ACCESS KEY data locally
## Setting up the backend API

- Run `npm install` command to install all dependencies
- Set up your ENV variables (.env)
- Variables you need are: 
  - REGION= your console region
  - SECRET_ACCESS_KEY= 
  - ACCESS_KEY_ID=

After everything is set, run `npm start` command

## Setting up the client

- Run `npm install` command to install dependencies
- Run `npm start` command to start the application