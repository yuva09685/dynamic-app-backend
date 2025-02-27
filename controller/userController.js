const crypto = require("crypto");
const { User } = require("../models");
const { sendEmail } = require("../utils/nodeMailer");

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

    try {
      const response = await sendEmail(
          email,
          "Welcome to our platform!",
          `<p>Dear ${name},</p><p>Welcome to our platform! Your profile has been created successfully.</p>`
      );
      console.log(response, "send email fucntion response ");
      
  } catch (emailError) {
      console.error("Error sending welcome email:", emailError);
  }

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

const updateProfiles = async (req, res) => {
  const id = req.body.id
  try {
    const userUpdate = await User.update(req.body,{ where: { id:id } });
    res.json(userUpdate)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error saving profile" });
  }
}

const deleteProfiles = async (req, res) => {
  const id = req.body.id
  try {
    const deleteUser = await User.destroy({ where: { id } });
    res.json(deleteUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error saving profile" });
  }
}

module.exports = {
  createProfile,
  getProfiles,
  updateProfiles,
  deleteProfiles
};
