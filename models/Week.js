const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WeekSchema = new Schema({
    name: String,
    squats: [ 
        {
        type: Schema.Types.ObjectId,
        ref: 'Squat'
        }
    ]
});

const Week = mongoose.model("Week", WeekSchema);

module.exports = Week;