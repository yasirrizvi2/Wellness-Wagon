// File: index.js
// Importing required modules and packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db.config.js');
const PORT = process.env.PORT || 5000;

const authRouter = require('./routes/authroutes.js');
const userRouter = require('./routes/userroutes.js');


const app = express();
db.connect();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes for the application
app.use(authRouter);
app.use(userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
