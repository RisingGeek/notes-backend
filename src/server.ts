import app from "./app";

// Start express server
const server = app.listen(app.get("port"), () => {
  console.log("App is running on port", app.get("port"));
});

process.on("uncaughtException", () => {
  // Kill DB connection
});

process.on("unhandledRejection", () => {

});

export default server;