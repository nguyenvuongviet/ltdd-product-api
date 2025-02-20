const db = require("../config/db");

const Product = {
  getByCategory: (categoryId, callback) => {
    db.query(
      "SELECT * FROM products WHERE category_id = ?",
      [categoryId],
      callback
    );
  },

  getTopSelling: (callback) => {
    db.query(
      "SELECT * FROM products ORDER BY quantity_sold DESC LIMIT 10",
      callback
    );
  },

  getNewProducts: (callback) => {
    db.query(
      "SELECT * FROM products WHERE created_at >= NOW() - INTERVAL 7 DAY ORDER BY created_at DESC LIMIT 10",
      callback
    );
  },
};

module.exports = Product;
