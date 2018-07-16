const mongoose = require("mongoose");
const elderlySchema = new mongoose.Schema({
    name: String,
    age: Number,
    lastKnownLocation: String,
    runningSpeed: Number,
})


module.exports = mongoose.model("Elderly", elderlySchema);