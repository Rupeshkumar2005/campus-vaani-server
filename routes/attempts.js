import express from "express";
import Attempt from "../models/Attempt.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// SAVE a new attempt (protected — must be logged in)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { moduleType, level, score, total } = req.body;

    if (!moduleType || score === undefined || total === undefined) {
      return res.status(400).json({ error: "moduleType, score, and total are required" });
    }

    const attempt = await Attempt.create({
      user: req.userId,
      moduleType,
      level,
      score,
      total,
    });

    // Keep only the latest 3 attempts per user — delete older ones
    const allAttempts = await Attempt.find({ user: req.userId }).sort({ createdAt: -1 });
    if (allAttempts.length > 3) {
      const idsToDelete = allAttempts.slice(3).map((a) => a._id);
      await Attempt.deleteMany({ _id: { $in: idsToDelete } });
    }

    res.status(201).json(attempt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET logged-in user's own attempts (protected)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const attempts = await Attempt.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(attempts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;