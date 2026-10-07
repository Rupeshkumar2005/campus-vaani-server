import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";
import authRoutes from "./routes/auth.js";
import attemptRoutes from "./routes/attempts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Only these origins can call the backend.
// Replace the second one below with your actual Vercel URL.
const allowedOrigins = [
  "http://localhost:5173",
  "https://campus-vaani.vercel.app", // TODO: replace with your actual Vercel URL
];

app.use(
  cors({
    origin: (origin, callback) => {
      // requests with no origin (curl, Postman, mobile apps) are allowed too
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/attempts", attemptRoutes);
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "CampusVaani API is running" });
});

app.get("/api/questions", async (req, res) => {
  try {
    const filter = {};
    if (req.query.moduleType) filter.moduleType = req.query.moduleType;
    const questions = await Question.find(filter).select(
      "-answerIndex -answer -correctIndex -explanation -modelAnswer"
    );
    res.json(questions);
  } catch (err) {
    console.error("Fetch questions error:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

app.post("/api/questions/check", async (req, res) => {
  try {
    const { questionId, selectedIndex, typedAnswer } = req.body;

    if (!questionId) {
      return res.status(400).json({ error: "questionId is required" });
    }

    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    let isCorrect = false;
    let correctAnswerText = null;

    if (question.type === "fill-blank") {
      isCorrect =
        typedAnswer &&
        typedAnswer.trim().toLowerCase() === question.answer.toLowerCase();
      correctAnswerText = question.answer;
    } else if (question.type === "grammar-correction") {
      isCorrect = selectedIndex === question.correctIndex;
      correctAnswerText = question.options[question.correctIndex];
    } else {
      // mcq (listening / reading / situational)
      isCorrect = selectedIndex === question.answerIndex;
      correctAnswerText = question.options[question.answerIndex];
    }

    res.json({
      correct: isCorrect,
      correctAnswer: correctAnswerText,
      explanation: question.explanation || null,
    });
  } catch (err) {
    console.error("Check answer error:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });