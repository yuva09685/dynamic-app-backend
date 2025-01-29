const express = require("express");
const { createProfile, getProfiles } = require("../controller/userController");

const router = express.Router();

router.post("/", createProfile);
router.get("/", getProfiles);

module.exports = router;
