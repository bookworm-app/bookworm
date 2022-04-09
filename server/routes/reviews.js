const express = require('express');
const path = require('path');

const reviewsController = require(path.resolve(__dirname, '../controllers/reviewsController.js'));

const router = express.Router();

// get
router.get('/', (req, res) => {
  res.status(200).send('here are the reviews');
});

// patch
router.patch('/:id', reviewsController.updateReview, (req, res) => {
  res.status(200).send('updated your review');
});

// delete
router.delete('/:id', reviewsController.deleteReview, (req, res) => {
  res.status(200).send('deleted your review');
});

module.exports = router;
