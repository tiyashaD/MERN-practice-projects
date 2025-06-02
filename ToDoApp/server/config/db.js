const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected ${mongoose.connection.host}`.bgCyan);
    } catch (error) {
        console.log(`MongoDB error ${error}`)
    }
};

module.exports = connectDB;