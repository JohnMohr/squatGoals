const express = require("express");
const compression = require("compression");
const logger = require("morgan")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));
// sets up express app for data parse
app.use(express.urlencoded({ extrended: true }));
app.use(express.json());


const db = require('./models')

// Kokori Tree
const seedSquats = [
    {
        name: 'Basic squat',
        repetitions: '25',
        isHeavy: false,
        CanDoNaked: true,
        difficulty: 1,
    },
    {
        name: 'Pistol squat',
        repetitions: '20',
        isHeavy: false,
        CanDoNaked: true,
        difficulty: 2,
    },
    {
        name: 'Bulgarian split squat',
        repetitions: '13',
        isHeavy: false,
        CanDoNaked: true,
        difficulty: 4,
    },
    {
        name: 'Zercher squat',
        repetitions: '10',
        isHeavy: true,
        CanDoNaked: true,
        difficulty: 5,
    },
    {
        name: 'Landmine squat',
        repetitions: '20',
        isHeavy: true,
        CanDoNaked: true,
        difficulty: 6,
    },

]

app.get('/seedworkouts', (req,res) => {
    db.Squat.create(seedSquats)
    .then(result => {
        console.log(result)
        db.Weeklyworkout.create([
          {
            name: 'week 1',
            squats: [
                result[Math.floor(math.random)],
                result[Math.floor(math.random)],
                result[Math.floor(math.random)]
            ]

          },
          {
            name: 'week 2',
            squats: [
                result[Math.floor(math.random)],
                result[Math.floor(math.random)],
                result[Math.floor(math.random)]
            ]

          },
          {
            name: 'week 3',
            squats: [
                result[Math.floor(math.random)],
                result[Math.floor(math.random)],
                result[Math.floor(math.random)]
            ]

          },
         

        ])
    })
})

// "KOBE!" *sends it*
app.get('/', (req, res) => {
    res.send("KOBE!")
})
// Navi: "Hey! Listen!"
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});