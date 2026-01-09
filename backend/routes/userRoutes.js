import express from "express";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.get("/profile", userAuth, (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

export default router;
