import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    moduleType: { type: String, required: true },
    level: { type: String },
    score: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const Attempt = mongoose.model("Attempt", attemptSchema);

export default Attempt;