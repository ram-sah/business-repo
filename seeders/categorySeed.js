const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vetDiscount", {
  useNewUrlParser: true
});

const categorySeed = [
    {
        categoryList: "Auto Care and Parts"
    },
    {
        categoryList: "Auto Manufactures"
    },
    {
        categoryList: "Banking"
    },
    {
        categoryList: "Electronics"
    },
    {
        categoryList: "Hardware"
    },
    {
        categoryList: "Hotels"
    },
    {
        categoryList: "Insurance"
    },
    {
        categoryList: "Restaurants"
    },
    {
        categoryList: "Retail"
    }
];

db.CategoryModel.deleteMany({})
  .then(() => db.CategoryModel.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });