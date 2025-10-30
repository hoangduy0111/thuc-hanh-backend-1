const { request } = require("express");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome tp contact book application."});
});

module.exports = app;