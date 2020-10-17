const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryList: String
});

const CategoryModel = mongoose.model("CategoryModel", categorySchema);

module.exports = CategoryModel;