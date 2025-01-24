const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
} = require("../Controllers/UserController");

const { verifyToken } = require("../Middlewares/UserAuth");

const router = express.Router();

// Routes
router.post("/signup", registerUser);
router.post("/signin", verifyToken, loginUser);
router.post("/forgot_password", verifyToken, forgotPassword);

module.exports = router;
