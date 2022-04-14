const path = require('path')
const db = require(path.resolve(__dirname, '../models/bookModels'));

const booksController ={};

booksController.getBooks = (req, res, next) => {
    const input = [];
    const userId = req.params.id;
    let booksQuery = 
        'SELECT rl._id AS readingListId, u.username, rl.user_id AS userId, b.title, b.author, b.genre_id, g.genre, rs.status, rl.recommend, rl.review \
        FROM ((((reading_lists AS rl\
        RIGHT JOIN users AS u ON rl.user_id = u._id)\
        RIGHT JOIN books AS b ON rl.book_id = b._id)\
        RIGHT JOIN genres AS g ON b.genre_id = g._id)\
        RIGHT JOIN read_statuses AS rs ON rl.status_id = rs._id)';
    if (userId && userId !== 'all') {
        booksQuery += 'WHERE u._id = $1';
        input.push(userId);
    }
    db.query(booksQuery, input)
        .then(dbRes => {
            res.locals.booklist = dbRes.rows;
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
    console.log("inside add book");
    const userId = req.params.id;
    const {title} = req.body;
    const {author} = req.body;
    const {genre} = req.body;
    const {genreId} = req.body;
    const {status} = req.body;
    const {statusId} = req.body;
    const {recommend} = req.body;
    const {review} = req.body;
    const input = [userId, title, author, genreId, statusId, recommend, review];
    // const input = [title, author, genreId];
    input.forEach((param, i) => {
        if (!param) {
            input[i] = null;
        }
    });
    
    let newBook = 
        // 'INSERT INTO books (title, author, genre_id)\
        // VALUES ($1, $2, $3)\
        // RETURNING _id AS book_id;'
        'WITH books_insert AS ( \
        INSERT INTO books (title, author, genre_id)\
        VALUES ($2, $3, $4)\
        RETURNING _id AS book_id)\
        INSERT INTO reading_lists (user_id, book_id, status_id, recommend, review)\
        SELECT $1, book_id, $5, $6, $7 FROM books_insert\
        RETURNING *;'
    db.query(newBook, input)
        .then(dbRes => {
            console.log('success')
            res.locals.newBook = dbRes.rows[0];
            return next();
        })
        .catch((err) => {
            console.log('fail')
            return next({
                log: `Error at addBook: ${err}`,
                status: 500,
                message: { err: 'An error occurred adding book' },
            })
        })
}

booksController.updateBookStatus = (req, res, next) => {
    const input = [];
    const readingListId = req.params.id;
    const {statusId} = req.body;
    const {recommend} = req.body;
    
    input.push(readingListId);
    input.push(statusId);
    if (recommend) {
        input.push(recommend)
    } else {
        input.push(false);
    }

    let statusChange =
        'UPDATE reading_lists\
        SET status_id = $2, recommend = $3\
        WHERE reading_lists._id = $1\
        RETURNING *'
    db.query(statusChange, input)
        .then(dbRes => {
            res.locals.updatedBook = dbRes.rows;
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
    const input = [];
    const readingListId = req.params.id;
    let deleteBook =
        'DELETE FROM reading_lists\
        WHERE reading_lists._id = $1\
        RETURNING *'
    input.push(readingListId);
    db.query(deleteBook, input)
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