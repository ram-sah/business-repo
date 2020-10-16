const router = require("express").Router();
const discountController = require("../../controllers/discountControllers")

console.log("DISCOUNT ROUTE")
router.route("/api/businesses")
    .get(discountController.findAll)

module.exports = router;