require('dotenv').config();
const http = require ('http');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io')
const path = require('path');
const routes = require('./routes');
const connectDB = require('./config/db');



const app = express();
// back-end port number
const PORT = process.env.PORT || 5000;

app.use(routes);

// mongoose connection
connectDB();

// checking to make sure mongoose is connected
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

// initiate middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// create express server
const server = http.createServer(app);


// set up websocket and cors permission on the front-end server
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const userdataRouter = require('./routes/api/userdata');
app.use('/userdata', userdataRouter);


// Start Server
app.listen(PORT, function(){
  console.log("server started on " + PORT);
});
