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

const Thoughts = [
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

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () => `${getRandomArrItem(usernames)}}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughts: getRandomArrItem(Thoughts),
    });
  }
  return results;
};

const getRandomFriends = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughts: getRandomArrItem(usernames),
    });
  }
  return results;
};

const getRandomrReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughts: getRandomArrItem(reactions),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomFriends, getRandomrReactions };
