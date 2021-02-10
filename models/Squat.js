const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SquatSchema = new Schema({
    name: String,
    repetitions: Number,
    sets: Number,
    needEquipment: Boolean,
    isHeavy: Boolean,
    canDoNaked: Boolean,
    difficulty: Number
})

const Squat = mongoose.model("Squat", SquatSchema);

module.exports = Squat;