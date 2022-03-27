const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // To access json data

app.get("/", () => {
  console.log("App is running");
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening on port 5000...");
});
