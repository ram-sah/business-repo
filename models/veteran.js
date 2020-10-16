const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const veteranSchema = new Schema({
    userId: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    ssn: { type: Number, required: true },
    veteranStatus: { type: Boolean, default: false }
})

const Veteran = mongoose.model("Veteran", veteranSchema);

module.exports = Veteran;