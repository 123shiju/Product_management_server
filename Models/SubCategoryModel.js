const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  subCategoryName: {
    type: String,
    required: [true, "Subcategory name is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is required"],
  },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
