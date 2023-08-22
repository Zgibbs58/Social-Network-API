const usernames = [
  "blueSky22",
  "cosmicDancer",
  "radiantSoul",
  "moonlightDream",
  "wonderWander",
  "electricEcho",
  "silverArrow",
  "mysticGrove",
  "starryEyes",
  "enchantedWhisper",
  "sapphireSeas",
  "dreamWeaver88",
  "velvetRaven",
  "shadowWalker",
  "midnightSerene",
  "crystalVoyager",
  "etherealMist",
  "blazingPhoenix",
  "aquaSerenity",
  "emberHeart",
];

const thoughts = [
  "Lost in thought, finding my way back.",
  "If words were colors, my mind would be a painting.",
  "Chasing dreams in a world of whispers.",
  "Thoughts like fireflies, flickering in the night.",
  "Capturing moments with the lens of my mind.",
  "In the silence, thoughts dance like shadows.",
  "A tapestry of thoughts woven with starlight.",
  "Wandering through the corridors of my mind.",
  "Thoughts are seeds; my mind is the garden.",
  "Echoes of yesterday's thoughts linger softly.",
  "My mind, an orchestra of untamed thoughts.",
  "Exploring the universe within my thoughts.",
  "Waves of thoughts crashing against the shores of reality.",
  "Where thoughts lead, the heart follows.",
  "Thoughts, like constellations, guide my way.",
];

const reactions = [
  "I disagree!",
  "I tried your algorithm, here were the results",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Reply: The side effects of in app purchases on digital marketplaces",
];

const emails = [
  "user1@example.com",
  "testuser123@gmail.com",
  "john.doe@mailinator.com",
  "alice.smith@yahoo.com",
  "jackson1985@hotmail.com",
  "sarah.jones@outlook.com",
  "samwilson2000@fakemail.net",
  "emily.brown@protonmail.com",
  "alex.carter@gmail.com",
  "lisa.miller@example.net",
  "chris.evans@mail.com",
  "jennifer1998@yahoo.com",
  "david.jackson@myemail.org",
  "anna.rodriguez@webmail.co",
  "kevin.walker@fakemail.com",
  "olivia.green@gmail.com",
  "eric.johnson@demoemail.net",
  "melissa.smith@randommail.org",
  "jacob.miller@hotmail.com",
  "grace.parker@mailinator.net",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () => {
  const randomUsername = getRandomArrItem(usernames);
  return randomUsername;
};

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = () => {
  const randomThought = getRandomArrItem(thoughts);
  return randomThought;
};

const getRandomReactions = (int) => {
  const randomReactions = getRandomArrItem(reactions);
  return randomReactions;
};

// Export the functions for use in seed.js
module.exports = { usernames, emails, getRandomName, getRandomThoughts, getRandomReactions };
