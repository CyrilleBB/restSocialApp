const express = require("express");
const mongoose = require("mongoose");

const users = require("./Routes/api/users");
const profile = require("./Routes/api/profile");
const posts = require("./Routes/api/posts");

const app = express();

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("yolo");
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
