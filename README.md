# Social-Network-API
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a an API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage their friend lists. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies](#technologies)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

If you do not have MongoDB Community Edition installed, you will need to do so by following the instructions at one of the links below:

[MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

[Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

To set up the project and run it locally on your machine, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the required dependencies using:

```
npm install
```

4. Start the server:

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
    - POST a new friend
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
- `/api/thoughts/:thoughtId/reactions/:reactionId`
    - DELETE to remove a reaction


## Technologies
[Express](https://www.npmjs.com/package/express)

[MongoDB](https://www.npmjs.com/package/mongodb)

[Mongoose](https://www.npmjs.com/package/mongoose)


## Walkthrough Video
![Walkthrough Video](assets/socialNetworkGif.gif)

[Walkthrough Video](https://drive.google.com/file/d/1KzRtgUjEirJhVaAXsvVcwoQJADYw-nzL/view)

## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.

