const path = require('path')

const cors = require('cors');
// const chalk = require('chalk');
// const mysql = require('mysql2');
const bodyParser = require("body-parser");

const logger = require('./logger');

const express = require("express");
require('dotenv/config');

const app = express();

app.use(
    cors({
        origin: [
            /^http:\/\/localhost:\d+$/,
            'https://parfirova.ru'
        ],
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const homeRouter = require('./routers/home-router');

// process.env.NODE_ENV === "local"

app.use('/api/home', homeRouter);

app.use(express.static(path.resolve(__dirname, '..', 'public_html/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public_html/build', 'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info((`Server running... http://localhost:${PORT}/`)));
