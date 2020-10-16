const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Discount
          .find(req.query)
          .then((dbModel) => {
              console.log(dbModel)
              return res.json(dbModel)
            })
    },
    test: function(req, res) {
        console.log("test")
    }
}