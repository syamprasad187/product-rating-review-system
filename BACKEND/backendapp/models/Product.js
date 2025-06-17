const db = require('../config/db');

const Product = {
  getAll: () => {
    return db.query('SELECT * FROM products');
  },
};

module.exports = Product;
