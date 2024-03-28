import mongoose from "mongoose";

export default function connectDatabase() {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.info("Successfully connected to database  ");
  }).catch((err) => {
    console.log("catch", err);
  });
}