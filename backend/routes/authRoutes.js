import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';
import passport from 'passport';

import { createUser, logoutUser, signInUser, verifyMe } from "../controllers/UserCont.js";

dotenv.config();

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signInUser);
router.get("/me", verifyMe);
router.get("/logout", logoutUser);


// Step 1: Redirect user to Google for authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Step 2: Google redirects here after authentication
router.get('/google/callback', 
  passport.authenticate('google', {
    session: false,
    failureRedirect: 'http://localhost:5173' || "https://oauthweb.netlify.app"
  }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.cookie('TOKEN', token, { httpOnly: true, maxAge: 3600000 });
    res.redirect('http://localhost:5173/dashboard' || "https://oauthweb.netlify.app/dashboard");
  }
);




export default router;