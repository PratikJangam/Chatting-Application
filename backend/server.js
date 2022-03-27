const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", () => {
  console.log("App is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening on port 5000...");
});
