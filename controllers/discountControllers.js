const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Discount
          .find(req.query)
          .then((dbModel) => {
              return res.json(dbModel)
            })
    },
    findOne: function(req, res) {
        db.Discount
          .findById(req.params.id)
          .then(dbModel => {
              return res.json(dbModel)
          })
    },
    findCategories: function(req, res) {
        db.CategoryModel
          .find(req.query)
          .then((dbModel) => {
              return res.json(dbModel)
          })
    },
    findCategory: function(req, res) {
        db.Discount
          .find(req.query)
          .where({ Category: req.params.Category })
          .then((dbModel) => {
              return res.json(dbModel)
          })
    }
}