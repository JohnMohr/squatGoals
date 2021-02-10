// DEPENDENCIES:
//
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan")
// EXPRESS CONFIG
//
const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));
//
// sets up express app for data parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./models')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/squatplanner", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//      ROUTER:
// "KOBE!" *sends it*
app.get('/', (req, res) => {
    res.send("KOBE!")
})

//  ROUTING SEED DATA:
//     Kokori Tree
const seedSquats = [
    {
        name: 'Basic squat',
        repetitions: '25',
        sets: 1,
        needEquipment: false,
        isHeavy: false,
        CanDoNaked: true,
        difficulty: 1,
    },
    {
        name: 'Pistol squat',
        repetitions: '10',
        sets: 4,
        needEquipment: false,
        isHeavy: false,
        CanDoNaked: true,
        difficulty: 2,
    },
    {
        name: 'Bulgarian split squat',
        repetitions: '13',
        sets: 4,
        needEquipment: false,
        isHeavy: false,
        CanDoNaked: true,
        difficulty: 4,
    },
    {
        name: 'Zercher squat',
        repetitions: '10',
        sets: 2,
        needEquipment: true,
        isHeavy: true,
        CanDoNaked: true,
        difficulty: 5,
    },
    {
        name: 'Landmine squat',
        repetitions: '20',
        sets: 4,
        needEquipment: true,
        isHeavy: true,
        CanDoNaked: true,
        difficulty: 6,
    },

]

app.get('/seedworkouts', (req,res) => {
    db.Squat.create(seedSquats)
    .then(result => {
        console.log(result)
        db.Week.create([
          {
            name: 'week 1',
            squats: [
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id
            ]

          },
          {
            name: 'week 2',
            squats: [
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id
            ]

          },
          {
            name: 'week 3',
            squats: [
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id
            ]

          },
          {
            name: 'week 4',
            squats: [
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id,
                result[Math.floor(math.random() * result.length)]._id
            ]

          },

        ])
            .then(fullRES => {
                res.json(fullRes)
            })
            .catch(err => {
                res.json(err)
            })
    })
    .catch(err => {
        res.send(err)
    })
})

//      VIEW DATA
//  
app.get('/api/squats', (req,res) => {
    db.Squat.find({})
    .then(dbSquats => {
        res.json(dbSquats);
    })
})

app.get('/api/weeks', (req,res) => {
    db.Week.find({})
    .then(dbWeeks => {
        res.json(dbWeeks);
    })
    .catch(err => {
        console.log(err);
        res.send(err);
    })
})


//      LISTENER
// Navi: "Hey! Listen!"
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});