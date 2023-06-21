const express = require('express');
const pool = require('../../db');

const booksRouter = express.Router();

/* Get all Books */

booksRouter.get('/', async(req,res) => {
    try {
        const limit = req.query.limit;
        const skip = req.query.skip;

        const AllBooks = await pool.query('SELECT * FROM books LIMIT $1 OFFSET $2',[limit,skip]);
        res.send(AllBooks.rows);
    } catch (error) {
        console.log(error);
    }
})

/* Create a Book */

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

/* Delete a Book */

booksRouter.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const deletedBook = await pool.query('DELETE from books WHERE book_id = $1', [id]);
        res.json(deletedBook)
    } catch (error) {
        console.log(error)
    }
})




module.exports = booksRouter;