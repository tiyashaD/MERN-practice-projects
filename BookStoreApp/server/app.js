const express = require ("express");
const connectDB = require("./config/db");

const bookRoutes = require("./routes/booksRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/routes", bookRoutes)

app.listen (1000, () => {
    console.log("Server is listening on port 1000");
})