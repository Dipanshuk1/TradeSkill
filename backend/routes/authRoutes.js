import express from "express";
import { register, login, refresh, logout } from "../controllers/authController.js";

const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Refresh token route
router.get("/refresh-token", refresh);

// Logout route
router.post("/logout", logout);

export default router;
