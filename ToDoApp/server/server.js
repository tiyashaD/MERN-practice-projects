const express = require("express");
const morgan= require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require("./config/db");

//env config
dotenv.config({ path: '../.env' });

//calling mongoose function
connectDB()

//rest object
const app = express(); // express er sob functionality ei app er moddhe add kore dilam

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api/v1/test', require('./routes/testRouter'))

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
    console.log(`Server is listening on ${process.env.DEV_MODE} mode on port no ${PORT}`.bgMagenta);
})