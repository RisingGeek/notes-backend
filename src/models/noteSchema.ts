import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  note: String
});

export default mongoose.model("note", noteSchema);