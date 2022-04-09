const express = require('express');
const booksController = require('../controllers/booksController');
const router = express.Router();

router.get('/:id', booksController.getUserBooks, (req, res) => {
    res.status(200).send('List of user Books');
});

router.get('/all', booksController.getAllBooks, (req, res) => {
    res.status(200).send('List of all Books');
})

router.post('/', booksController.addBook, (req, res) => {
    res.status(200).send('adding a Book');
})

router.patch('/:id', booksController.updateBookStatus, (req, res) => {
    res.status(200).send('Update status of Book');
});

router.delete('/:id', booksController.removeBook, (req, res) => {
    res.status(200).send('Remove a book');
});

module.exports = router;