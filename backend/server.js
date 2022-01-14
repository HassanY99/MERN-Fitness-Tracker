// dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();


const port = process.env.PORT || 5000;


// middlewares

app.use(cors());
app.use(express.json());


// Connect to MongoDB Atlas

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDb database connection has been successfully established");
})

// Routes

const usersRouter = require('./routes/users');
const excercisesRouter = require('./routes/excercises');

app.use('/users', usersRouter);
app.use('/excercises', excercisesRouter);



// PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});