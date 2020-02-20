const express = require('express');
const couponRoute = require('./routes/api/coupons');
const connectDB = require('./config/connectDB');
const app = express();

//connect to db
connectDB();

//set a middleware to parse data
app.use(express.json());

app.use('/api/coupons', couponRoute);
app.listen(5000);
