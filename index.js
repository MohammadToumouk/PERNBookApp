const express = require('express');
const cors = require('cors');
const app = express();
require ('dotenv').config;
const pool = require('./db')
const booksRouter = require('./routes/books/books')

app.use(cors());
app.use(express.json())



app.use('/api/books', booksRouter);






app.listen(5070, () => {
    console.log("SERVER IS RUNNING ON FIRE")
});