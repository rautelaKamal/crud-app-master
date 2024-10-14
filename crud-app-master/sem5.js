const express = require("express");

const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require("dotenv").config();

// Initialize Express app
const app = express();


const taskRouter = require("./routes/taskRoutes");
const userController = require('./controllers/userController');


// const {MONGO_IP, MONGO_PORT , MONGO_USER, MONGO_PASSWORD} = require("./config/config");
// const MONGO_URL = 'mongodb://${MONGO_USEER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin'

const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;



const mongoose = require("mongoose");
mongoose.connect(
    //"mongodb://root:root@mongo:27017/?authSource=admin")
    //"mongodb://root:root@172.18.0.3:27017/?authSource=admin")
    MONGO_URL)
    .then(()=>{
        console.log("Successfully connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error trying to connect MongoDB :",e);
    })

app.use(express.json());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes); // User routes


app.get('/', (req, res) => {
    res.send('Hello welcome to the app ');
});

//app.use("/api/v1/tasks", taskRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

