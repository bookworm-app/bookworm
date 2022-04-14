const path = require('path')
const db = require(path.resolve(__dirname, '../models/bookModels'));

const reviewsController = {};

reviewsController.updateReview = (req, res, next) => {
  const _id = req.params.id;
  const method = req.method;
  // if method is delete, set review to null
  let review;
  if (method === 'DELETE') review = null;
  else {
    // otherwise get the review off of the request body
    review = req.body.review;
    // if method is patch, ensure body has a review string AND that it's length is > 0, then set review to that string
    if (typeof review !== 'string' || review.length === 0 || method !== 'PATCH') {
      return next({
        log: 'Error updating review in reviewsController.updateReview\nDetails: Invalid request',
        message: { err: 'Error updating review' }
      })}
  }  
  const updateReviewQuery = 'UPDATE reading_lists SET review = $1 WHERE _id = $2 RETURNING *';
  const updateReviewParams = [review, _id];
  db.query(updateReviewQuery, updateReviewParams)
    .then(dbResponse => {
      res.locals.updatedItem = dbResponse.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error updating review in reviewsController.updateReview\nDetails: ${err}`,
        message: { err: 'Error updating review' }
      })
    });
}

// get controller implemented for testing, not currently used by frontend
reviewsController.getReviews = (req, res, next) => {
  const _id = req.params.id;
  console.log(req);
  console.log(req.params);
  console.log(req.body);
  let getReviewQuery = 'SELECT rl._id, u.username, b.title, b.author, g.genre, s.status, rl.recommend, rl.review FROM reading_lists rl\
  LEFT OUTER JOIN users u ON rl.user_id = u._id\
  LEFT OUTER JOIN books b ON rl.book_id = b._id\
  LEFT OUTER JOIN genres g ON b.genre_id = g._id\
  LEFT OUTER JOIN read_statuses s ON rl.status_id = s._id';
  const getReviewParams = []
  // if get request was made for a specific reading list item, add it as a condition and a query parameter
  if (_id) {
    getReviewQuery += ' WHERE rl._id = $1';
    getReviewParams.push(_id);
  }
  
  db.query(getReviewQuery, getReviewParams)
    .then(dbResponse => {
      res.locals.reviews = dbResponse.rows;
      // console.log(res.locals.reviews); //dbResonse.rows = array w objects. Each obj = entry w username, title, author, genre, status, etc.
      console.log(res.body);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error getting reviews in reviewsController.getReviews\nDetails: ${err}`,
        message: { err: 'Error getting reviews' }
      })
    });
}

module.exports = reviewsController