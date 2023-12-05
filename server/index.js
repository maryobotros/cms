// Import libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Connect the database to MongoDB
mongoose.connect("mongodb+srv://user123:Password123@cluster0.ermyfv6.mongodb.net/cms?retryWrites=true&w=majority")

// Tell API to start on port 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});