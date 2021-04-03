const log = console.log

const chalk = require('chalk');
const mysql = require('mysql2');
const express = require("express");

const app = express();

app.use(express.static(__dirname + 'public'));

app.use(express.json({ limit: '1mb'}));
app.set("view engine", "pug");

app.get("/", (req, res) => {   
    res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => log(`Server running... \n` + chalk.black.bgGreen(`http://localhost:${PORT}/`)));

// const http = require('http');
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, World!');
// });
// server.listen(3000);
