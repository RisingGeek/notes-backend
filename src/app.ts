import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Create Express server
const app = express();

// Express Configuration
app.set("port", process.env.PORT || 5000);
// Cross origin resource sharing
app.use(cors());
// body-parser middleware to parse income request body
app.use(bodyParser.json());

export default app;