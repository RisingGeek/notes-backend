import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import connectDatabase from "config/dbSetup";
import notesController from "controllers/notesController";
import errorHandler from "middleware/errorHandler";

// ENV config
configDotenv();

// Create Express server
const app = express();

// Express Configuration
app.set("port", process.env.PORT || 5000);

// Establish DB connection
connectDatabase();

// Cross origin resource sharing
app.use(cors());
// body-parser middleware to parse income request body
app.use(bodyParser.json());
app.use("/notes", notesController);
app.use(errorHandler);


export default app;