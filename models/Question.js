import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  moduleType: {
    type: String,
    enum: ["listening", "reading", "writing", "speaking", "grammar", "situational"],
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "medium", "hard"],
  },
  type: {
    type: String,
    enum: ["mcq", "fill-blank", "grammar-correction", "writing-prompt", "read-aloud"],
    required: true,
  },
  passage: { type: String },
  blankPassage: { type: String },
  question: { type: String },
  options: [{ type: String }],
  answerIndex: { type: Number },
  answer: { type: String },
  errorPart: { type: String },
  correctIndex: { type: Number },
  explanation: { type: String },
  prompt: { type: String },
  modelAnswer: { type: String },
  wordLimit: { type: String },
  lengthCategory: { type: String, enum: ["short", "long"] },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;