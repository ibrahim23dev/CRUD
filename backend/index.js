const express = require('express');
const {dbConnect}=require('./Src/Utils/db')
const app = new express();
require('dotenv').config();
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use('/api', require('./Src/Router/api'))

dbConnect();


const port=process.env.PORT
app.listen(port, () => {
    console.log(`Server is Running Success on: ${port}`);
})