const express = require('express');
const pool = require('../../db');

const booksRouter = express.Router();

booksRouter.get('/', async(req,res) => {
    try {
        const AllBooks = await pool.query('SELECT * FROM books;');
        res.send(AllBooks.rows);
    } catch (error) {
        console.log(error);
    }
})

booksRouter.post('/', async(req,res) => {
    try {
        const {book_id, book_title, book_author, book_description, book_category, book_cover_url,book_publshedAt, book_isActive} = req.body;
        const newBook = await pool.query('INSERT INTO books (book_id, book_title, book_author, book_description, book_category, book_cover_url,book_publshedat, isactive) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
        [book_id, book_title, book_author, book_description, book_category, book_cover_url,book_publshedAt, book_isActive]);

        res.send(newBook);
    } catch (error) {
        console.log(error);
    }
});




module.exports = booksRouter;