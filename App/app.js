const log = console.log

const chalk = require('chalk');
const mysql = require('mysql2');
const express = require("express");
require('dotenv/config');


const app = express();

if (process.env.NODE_ENV === "local") {
    app.use(express.static(__dirname + './../public_html'));
} else {
    app.use(express.static(__dirname + 'public'));
}

app.use(express.json({ limit: '1mb'}));
app.set("view engine", "pug");

app.get("/", (req, res) => {   
    res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => log(`Server running... \n` + chalk.black.bgGreen(`http://localhost:${PORT}/`)));
