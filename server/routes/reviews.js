const express = require('express');
const path = require('path');

const reviewsController = require(path.resolve(__dirname, '../controllers/reviewsController.js'));

const router = express.Router();

// get
// get routes implemented for testing, not currently used by frontend
router.get('/', reviewsController.getReviews, (req, res) => {
  res.status(200).send(res.locals.reviews);
});

router.get('/:id', reviewsController.getReviews, (req, res) => {
  res.status(200).send(res.locals.reviews);
});

// patch route
router.patch('/:id', reviewsController.updateReview, (req, res) => {
  res.status(200).json(res.locals.updatedItem);
});

// delete
router.delete('/:id', reviewsController.updateReview, (req, res) => {
  res.status(200).json(res.locals.updatedItem);
});

module.exports = router;
