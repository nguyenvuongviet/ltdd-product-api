const Category = require("../models/categoryModel");

const getAllCategories = (req, res) => {
  Category.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi truy vấn database" });
    }
    res.json(results);
  });
};

module.exports = { getAllCategories };
