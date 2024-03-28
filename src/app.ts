import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import connectDatabase from "config/dbSetup";

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

export default app;