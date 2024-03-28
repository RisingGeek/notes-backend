import app from "./app";

// Start express server
const server = app.listen(app.get("port"), () => {
  console.info("App is running on port", app.get("port"));
});

process.on("uncaughtException", (error) => {
  // Kill DB connection
  console.error(error);
});

process.on("unhandledRejection", () => {

});

export default server;