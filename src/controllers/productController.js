const Product = require("../models/productModel");

const getProductsByCategory = (req, res) => {
  const { categoryId } = req.params;
  Product.getByCategory(categoryId, (err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn database" });
    res.json(results);
  });
};

const getTopSellingProducts = (req, res) => {
  Product.getTopSelling((err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn database" });
    res.json(results);
  });
};

const getNewProducts = (req, res) => {
  Product.getNewProducts((err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn database" });
    res.json(results);
  });
};

module.exports = {
  getProductsByCategory,
  getTopSellingProducts,
  getNewProducts,
};
