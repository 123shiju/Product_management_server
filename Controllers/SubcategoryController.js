const SubCategory = require("../Models/SubCategoryModel");
const Category = require("../Models/CategoryModel");

exports.addSubCategory = async (req, res) => {
  const { subCategoryName, categoryId } = req.body;

  if (!subCategoryName || !categoryId) {
    return res
      .status(400)
      .json({ message: "Subcategory name and category ID are required" });
  }

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const subCategory = await SubCategory.create({
      subCategoryName,
      category: categoryId,
    });
    res
      .status(201)
      .json({ message: "Subcategory added successfully", subCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding subcategory", error: error.message });
  }
};

exports.getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find().populate(
      "category",
      "categoryName"
    );
    const data = subcategories.map((subcategory) => ({
      categoryId: subcategory.category._id,
      categoryName: subcategory.category.categoryName,
      subCategoryId: subcategory._id,
      subCategoryName: subcategory.subCategoryName,
    }));

    res.status(200).json({ categoriesWithSubcategories: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching subcategories", error: error.message });
  }
};
