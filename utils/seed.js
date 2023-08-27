const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { emails, usernames } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Add users to the collection and await the results
  for (let i = 0; i < 5; i++) {
    await User.collection.insertOne({ username: usernames[i], email: emails[i] });
  }

  // Log out the seed data to indicate what should appear in the database
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
