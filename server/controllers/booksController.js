const path = require('path')
const db = require(path.resolve(__dirname, '../models/bookModels'));

const booksController ={};

booksController.getUserBooks = (req, res, next) => {
    next();
}

booksController.getAllBooks = (req, res, next) => {
    next();
}

booksController.addBook = (req, res, next) => {
    next();
}

booksController.updateBookStatus = (req, res, next) => {
    next();
}

booksController.removeBook = (req, res, next) => {
    next();
}


module.exports = booksController;