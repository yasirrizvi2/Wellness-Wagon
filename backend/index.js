// File: index.js
// Importing required modules and packages
const express = require('express');
require('dotenv').config();
const db = require('./config/db.config.js');
const PORT = process.env.PORT || 5000;

const authRouter = require('./routes/authroutes.js');
const userRouter = require('./routes/userroutes.js');
const todoRouter = require('./routes/todoroutes.js');
const participantRouter = require('./routes/participantroute.js');


const app = express();
db.connect();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes for the application
app.use(authRouter);
app.use(userRouter);
app.use(todoRouter);
app.use(participantRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
