const express = require("express");
const router = express.Router();
const {
  addSubCategory,
  getAllSubCategories,
} = require("../Controllers/SubcategoryController");

router.post("/Addsubcategories", addSubCategory);
router.get("/Getall", getAllSubCategories);

module.exports = router;
