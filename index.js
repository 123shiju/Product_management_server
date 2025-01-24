const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const authRoutes = require("./Routes/AuthRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");
const Category = require("./Routes/CategoryRoutes");
const SubCategory = require("./Routes/SubCategoryRoutes");
const wishlistRoutes = require("./Routes/WishListRoutes");
const cors = require("cors");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.options('*', cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/category", Category);
app.use("/api/subcategory", SubCategory);
// app.use("/api/wishlist", wishlistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
