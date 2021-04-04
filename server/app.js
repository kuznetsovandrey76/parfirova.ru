const log = console.log

const path = require('path')

const chalk = require('chalk');
const mysql = require('mysql2');
const express = require("express");
require('dotenv/config');


const app = express();

if (process.env.NODE_ENV === "local") {
    app.use(express.static(__dirname + './../public_html/build'));
} else {
    app.use(express.static(__dirname))
    app.use(express.static(path.resolve(__dirname, 'build')))
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log(`Server running... \n` + chalk.black.bgGreen(`http://localhost:${PORT}/`)));
