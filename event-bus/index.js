const { default: axios } = require("axios");
const express = require("express");

const app = express();
app.use(express.json());

const port = 8000;

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);

  //post service
  axios.post("http://localhost:5000/events", event).catch((err) => {
    console.log(err.message);
  });
  //comment service
  axios.post("http://localhost:5001/events", event).catch((err) => {
    console.log(err.message);
  });
  //query service
  axios.post("http://localhost:5002/events", event).catch((err) => {
    console.log(err.message);
  });
  //moderation service
  axios.post("http://localhost:5003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.status(200).json("success");
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(port, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server is running on port " + port);
});
