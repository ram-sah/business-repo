const mongoose = require("mongoose");
const db = require("../models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vetDiscount", {
  useNewUrlParser: true
});

const veteranSeed = [
    {
        userId: "",
        firstName: "Cody",
        lastName: "Blankenship",
        ssn: 123456789,
        veteranStatus: true
    },
    {
        userId: "",
        firstName: "Piayon",
        lastName: "Lassanah",
        ssn: 234567890,
        veteranStatus: false
    },
    {
        userId: "",
        firstName: "Ram",
        lastName: "Sah",
        ssn: 345678901,
        veteranStatus: false
    }
];

db.Veteran.deleteMany({})
  .then(() => db.Veteran.collection.insertMany(veteranSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });