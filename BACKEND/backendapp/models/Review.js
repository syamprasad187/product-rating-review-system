const db = require('../config/db');

exports.create = (data, callback) => {
    db.query('INSERT INTO reviews SET ?', data, callback);
};

exports.findByProductId = (product_id, callback) => {
    db.query('SELECT * FROM reviews WHERE product_id = ?', [product_id], callback);
};