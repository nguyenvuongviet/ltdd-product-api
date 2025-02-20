const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./src/config/db");

const categoryRoutes = require("./src/routes/categoryRoutes");
const productRoutes = require("./src/routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
