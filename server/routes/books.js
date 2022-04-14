const express = require('express');
const booksController = require('../controllers/booksController');
const router = express.Router();

router.get('/:id', booksController.getBooks, (req, res) => {
  return res.status(200).json(res.locals.booklist);
});

router.get('/all', booksController.getBooks, (req, res) => {
  return res.status(200).json(res.locals.booklist);
});

router.post('/:id', booksController.addBook, (req, res) => {
  return res.status(200).json(res.locals.newBook);
});

router.patch('/:id', booksController.updateBookStatus, (req, res) => {
  return res.status(200).json(res.locals.updatedBook);
});

router.delete('/:id', booksController.removeBook, (req, res) => {
  return res.status(200).json(res.locals.deletedBook);
});

module.exports = router;
