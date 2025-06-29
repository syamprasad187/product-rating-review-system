const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');

router.post('/reviews', reviewController.createReview);
router.get('/reviews/:id', reviewController.getReviews);

module.exports = router;