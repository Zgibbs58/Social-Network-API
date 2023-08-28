# Social-Network-API
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a an API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage their friend lists. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation
To set up the project and run it locally on your machine, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies using:

```
npm install
```

3. Start the server:

```
npm start
```

## Usage
This API allows users to interact with the social network application by providing various routes for users, thoughts, reactions, and friend management. You can use tools like Insomnia or Postman to test the API endpoints.

## API Routes
- `/api/users`
    - GET all users
    - POST a new user
- `/api/users/:userId`
    - GET user by id
    - PUT to update a user
    - DELETE to remove a user
- `/api/users/:userId/friends/:friendId`
    - POST to add a new friend
    - DELETE to remove a friend
- `/api/thoughts`
    - GET all thoughts
    - POST a new thought
- `/api/thoughts/:thoughtId`
    - GET thought by id
    - PUT to update a thought
    - DELETE to remove a thought
- `/api/thoughts/:thoughtId/reactions`
    - POST to create a reaction
    - DELETE to remove a reaction

## Walkthrough Video
![Walkthrough Video](assets/socialNetworkGif.gif)

[Walkthrough Video](https://drive.google.com/file/d/1uvS3PZdDV58ylZ-Pkvv5MQIHnYTmvfL3/view)

## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.

