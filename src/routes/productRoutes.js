const express = require("express");
const router = express.Router();
const {
  getProductsByCategory,
  getTopSellingProducts,
  getNewProducts,
} = require("../controllers/productController");

router.get("/category/:categoryId", getProductsByCategory);
router.get("/top-selling", getTopSellingProducts);
router.get("/new-products", getNewProducts);

module.exports = router;
