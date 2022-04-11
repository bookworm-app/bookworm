const path = require('path')
const db = require(path.resolve(__dirname, '../models/bookModels'));

const booksController ={};

booksController.getBooks = (req, res, next) => {
    const userId = req.params.id;
    let booksQuery = 
        'SELECT rl._id, u.username, b.title, b.author, b.genre_id, rs.status\
        FROM (((reading_lists as rl\
        RIGHT JOIN users AS u ON rl.user_id = u._id)\
        RIGHT JOIN books AS b ON rl.book_id = b._id)\
        RIGHT JOIN read_statuses AS rs ON rl.status_id = rs._id)';
    if (userId) {
        booksQuery += 'WHERE u.username = $1';
    }
    db.query(booksQuery, userId)
        .then(dbRes => {
            res.locals.booklist = dbRes;
            return next();
        })
        .catch((err) => {
            return next({
                log: `Error at getUserBooks: ${err}`,
                status: 500,
                message: { err: 'An error occurred getting user books' },
            })
        })
}

booksController.addBook = (req, res, next) => {
    const userId = req.params.id;
    const {title} = req.body;
    const {author} = req.body;
    const {genre} = req.body;
    const {status} = req.body;
    let newBook = 
        'INSERT INTO books (title, author, genre_id)\
        VALUES ($2, $3, $4)\
        SELECT SCOPE_IDENTITY() as scope\
        INSERT INTO reading_lists (user_id, book_id, status_id, recommend)\
        VALUES ($1, scope, $5, FALSE)'
    db.query(newBook, userId, title, author, genre, status)
        .then(dbRes => {
            res.locals.newBook = dbRes;
            return next();
        })
        .catch((err) => {
            return next({
                log: `Error at addBook: ${err}`,
                status: 500,
                message: { err: 'An error occurred adding book' },
            })
        })
}

booksController.updateBookStatus = (req, res, next) => {
    const userId = req.params.id;
    const bookID = req.body.bookid;
    const {status} = req.body;
    let statusChange =
        'UPDATE reading_lists\
        SET status_id = $3\
        WHERE user_id = $1 AND bookID = $2'
    db.query(statusChange, userId, bookID, status)
        .then(dbRes => {
            res.locals.updatedBook = dbRes;
            return next();
        })
        .catch((err) => {
            return next({
                log: `Error at updateBookStatus: ${err}`,
                status: 500,
                message: { err: 'An error occurred updating book status' },
            })
        })
}

booksController.removeBook = (req, res, next) => {
    const userId = req.params.id;
    const bookID = req.body.bookid;
    let deleteBook =
        'DELETE FROM reading_lists\
        WHERE user_id = $1 AND bookID = $2'
    db.query(deleteBook, userId, bookID)
        .then(dbRes => {
            res.locals.deletedBook = dbRes;
            return next();
        })
        .catch((err) => {
            return next({
                log: `Error at removeBook: ${err}`,
                status: 500,
                message: { err: 'An error occurred removing book' },
            })
        })
}


module.exports = booksController;
//john/bookroutes