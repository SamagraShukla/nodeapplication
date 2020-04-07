const express = require('express');
const couponRoute = require('./routes/api/coupons');
const applicationRoute = require('./routes/api/application');
const connectDB = require('./config/connectDB');
const app = express();

//connect to db
connectDB();

//set a middleware to parse data
app.use(express.json());

app.use('/api/coupons', couponRoute);
app.use('/api/application', applicationRoute);
app.listen(5000);