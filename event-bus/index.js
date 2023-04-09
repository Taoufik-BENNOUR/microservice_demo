const { default: axios } = require("axios");
const express = require("express");

const app = express();
app.use(express.json());

const port = 8000;

app.post("/events", (req, res) => {
  const event = req.body;
  //post service
  axios.post("http://localhost:5000/events", event);
  //comment service
  axios.post("http://localhost:5001/events", event);
  //query service
  axios.post("http://localhost:5002/events", event);
  //moderation service
  axios.post("http://localhost:5003/events", event);

  res.status(200).json("success");
});

app.listen(port, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server is running on port " + port);
});
