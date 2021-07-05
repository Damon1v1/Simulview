require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const io = require('socket.io');



const app = express();
const PORT = process.env.PORT || 5000;

// mongoose connection
mongoose.connect(process.env.DATABASE_URL, {
  useCreateIndex: true,
  useNewUrlParser: true
});
const db = mongoose.connection

// checking to make sure mongoose is connected
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userdataRouter = require('./routes/api/userdata');
app.use('/userdata', userdataRouter);


// Start Server
app.listen(PORT, function(){
  console.log("server started on " + PORT);
});
