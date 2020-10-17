const router = require("express").Router();
const discountController = require("../../controllers/discountControllers")


router.route("/api/businesses")
    .get(discountController.findAll)

router.route("/api/businesses/Category/:id")
    .get(discountController.findOne)

router.route("/api/categories")
    .get(discountController.findCategories)

router.route("/api/businesses/:Category")
    .get(discountController.findCategory)

module.exports = router;