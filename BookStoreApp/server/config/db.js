const mongoose = require("mongoose");

const connectDB = async () => {
    try{
       await mongoose.connect("mongodb+srv://d22tiyasha:vL6YNHEarsdos7CF@cluster0.qhc48cj.mongodb.net/");
       console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

