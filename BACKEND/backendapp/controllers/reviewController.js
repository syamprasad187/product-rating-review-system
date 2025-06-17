const Review = require('../models/Review');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : './uploads',
    filename : (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({storage}).single('photo');

exports.createReview = (req, res) => {
    upload(req, res, (err) => {
        if(err) return res.status(500).json({message : 'Failed to Upload'});

        const {product_id, user_id, rating, review} = req.body;
        const photo = req.file ? req.file.filename : null;

        if(!product_id || !user_id || (!rating && !review)){
            return res.status(400).json({message : 'Required fields Missing'});
        }

        Review.create({product_id, user_id, rating, review, photo}, (err) => {
            if (err)    return res.status(500).json({message : 'Could not Save Review'});
            res.json({message : 'Review Submitted'});
        });
    });
};

exports.getReviews = (req, res) => {
    const productId = req.params.id;
    Review.findByProductId(productId, (err, results) => {
        if(err) return res.status(500).json({message : 'Error Fetching Reviews'});
        res.json(results);
    });
};