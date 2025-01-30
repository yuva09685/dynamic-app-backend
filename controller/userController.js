const crypto = require("crypto");
const { User } = require("../models");

// Generate Gravatar URL
const getGravatarUrl = (email) => {
  console.log(email);
  
  const hash = crypto.createHash("md5").update(email).digest("hex");
  return `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`;
};

// Create a new user profile
const createProfile = async (req, res) => {
  try {
    const { name, email, bio, location } = req.body;
    const avatar = getGravatarUrl(email);
    const user = await User.create({ name, email, bio, location, avatar });
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error saving profile" });
  }
};

// Fetch all user profiles
const getProfiles = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

module.exports = {
  createProfile,
  getProfiles,
};
