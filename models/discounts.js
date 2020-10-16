const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    category: { type: String, required: true},
    business: { type: String, required: true},
    description: String,
    discount: String
})

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;