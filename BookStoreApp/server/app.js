const express = require ("express");
const connectDB = require("./config/db");
const cors = require("cors");

const bookRoutes = require("./routes/booksRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/books", bookRoutes);

app.listen (1000, () => {
    console.log("Server is listening on port 1000");
})