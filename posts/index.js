const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

// app.use(bodyParser.json())
const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.post("/posts", async (req, res) => {
  const postId = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[postId] = {
    postId,
    title,
  };

  await axios.post("http://localhost:8000/events", {
    type: "PostCreated",
    data: {
      id: postId,
      title,
    },
  });

  res.status(200).send(posts[postId]);
});

app.post("/events", (req, res) => {
  console.log("received event", req.body.type);
  res.send({});
});

app.listen(port, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server is running on port " + port);
});
