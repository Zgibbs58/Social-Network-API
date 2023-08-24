const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName, emails, getRandomThoughts, getRandomReactions, usernames } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    users.push(usernames[i]);
  }

  // Add users to the collection and await the results
  for (let i = 0; i < 5; i++) {
    await User.collection.insertOne({ username: users[i], email: emails[i] });
  }

  // Add courses to the collection and await the results
  // for (let i = 0; i < 20; i++) {
  // const thought =
  // await Thought.collection.insertOne({
  // thoughtText: getRandomThoughts(),
  // username: users[Math.floor(Math.random() * users.length)],
  // reactions: [getRandomReactions(), getRandomReactions()],
  // });
  // const item = await Thought.findById(thought.insertedId);
  // console.log(item);
  // }

  // Log out the seed data to indicate what should appear in the database
  console.table(usernames);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
