const express = require("express");
const cors = require("cors");

const { randomBytes } = require("crypto");
const { default: axios } = require("axios");

const port = 5001;
const app = express();
app.use(cors());
app.use(express.json());

const commentsByPostId = [];

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:8000/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });

  res.status(200).send(comments);
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
