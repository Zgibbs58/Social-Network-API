const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName, getRandomThoughts, getRandomFriends, getRandomrReactions } = require("./data");

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
    const usernames = getRandomName();

    users.push({
      usernames,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  for (let i = 0; i < 20; i++) {
    await Thought.collection.insertOne({
      thoughtText: getRandomThoughts(),
      username: users[i],
      reactions: getRandomrReactions(),
    });
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
