const path = require('path')
const db = require(path.resolve(__dirname, '../models/bookModels'));

const reviewsController = {};

reviewsController.updateReview = (req, res, next) => {
  return next();
}

reviewsController.deleteReview = (req, res, next) => {
  return next();
}

module.exports = reviewsController