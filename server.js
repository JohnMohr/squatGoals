const express = require("express");
const compression = require("compression");
const logger = require("morgan")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));

app.use(express.urlencoded({ extrended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send("high-low there.")
})

app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});