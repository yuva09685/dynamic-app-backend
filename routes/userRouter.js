const express = require("express");
const { createProfile, getProfiles, updateProfiles, deleteProfiles } = require("../controller/userController");

const router = express.Router();

router.post("/userCreate", createProfile);
router.post("/userList", getProfiles);
router.post("/userUpdate", updateProfiles);
router.post("/userDelete", deleteProfiles)

module.exports = router;
