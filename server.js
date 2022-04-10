const express = require("express");
const app = express();

app.get("/", (_request, response) => {
    include_once("index.html");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log("Listening on port " + PORT);
})