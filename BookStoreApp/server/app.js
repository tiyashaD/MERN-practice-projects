const express = require ("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/services", (req, res) => {
    res.send("services page");
})

app.listen (1000, () => {
    console.log("Server is listening on port 1000");
})