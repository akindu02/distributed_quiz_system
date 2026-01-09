import express from "express";
import userAuth from "../middleware/userAuth.js";
import roleAuth from "../middleware/roleAuth.js";

const router = express.Router();

router.get(
  "/dashboard",
  userAuth,
  roleAuth("admin"),
  (req, res) => {
    res.json({ success: true, message: "Admin dashboard" });
  }
);

export default router;
