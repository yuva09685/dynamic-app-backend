const express = require("express");
const { createProfile, getProfiles } = require("../controller/userController");

const router = express.Router();

router.post("/userCreate", createProfile);
router.post("/userList", getProfiles);

module.exports = router;
