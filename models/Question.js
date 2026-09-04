import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  moduleType: {
    type: String,
    enum: ["listening", "reading", "writing", "speaking"],
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "medium", "hard"],
    required: true,
  },
  type: {
    type: String,
    enum: ["mcq", "fill-blank"],
    required: true,
  },
  passage: { type: String, required: true },
  blankPassage: { type: String },
  question: { type: String },
  options: [{ type: String }],
  answerIndex: { type: Number },
  answer: { type: String },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;