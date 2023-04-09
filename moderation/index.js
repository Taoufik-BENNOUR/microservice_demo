const express = require("express");
const axios = require("axios");

const port = 5003;
const app = express();

app.use(express.json());

app.post("/events", async(req, res) => {
    const {type,data} = req.body;
    const {id,content,postId} =data
    console.log("moderation",req.body);
    if(type==="CommentCreated"){
        const status = content.includes('orange')?"rejected":"approved";
        await axios.post("http://localhost:8000/events",{
            type:"CommentModerated",
            data:{
                id,
                postId,
                status,
                content
            }
        })
    }
  res.send({});

});


app.listen(port, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server is running on port " + port);
});
