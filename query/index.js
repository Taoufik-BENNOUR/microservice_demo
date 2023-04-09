const express = require("express");
const cors = require("cors");
const port = 5002;
const app = express();

app.use(express.json());
app.use(cors())
const posts={};

app.get("/posts", (req, res) => {

  res.status(200).json(posts);

});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = {id,title,comments:[]}
  }
  if (type === "CommentCreated") {
    const {id,content,postId,status} = data;

    const post = posts[postId];
    post.comments.push({id,content,status});
  }
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
  res.send({});
});

app.listen(port, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server is running on port " + port);
});
