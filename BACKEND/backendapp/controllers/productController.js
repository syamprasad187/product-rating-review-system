const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await Product.getAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error Fetching Products', error: err });
  }
};
