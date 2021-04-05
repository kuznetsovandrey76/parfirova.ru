const log = console.log

const path = require('path')

const chalk = require('chalk');
const mysql = require('mysql2');
const bodyParser = require("body-parser");

const express = require("express");
require('dotenv/config');

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  
app.use(bodyParser.json());

const homeRouter = require('./routers/home-router');

// process.env.NODE_ENV === "local"

app.use('/api/home', homeRouter);

app.use(express.static(path.resolve(__dirname, '..', 'public_html/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log(`Server running... \n` + chalk.black.bgGreen(`http://localhost:${PORT}/`)));
