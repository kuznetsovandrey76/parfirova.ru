const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const logger = require('./logger');

require('dotenv/config');

const app = express();

app.use(
    cors({
        origin: [/^http:\/\/localhost:\d+$/, 'https://parfirova.ru'],
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const homeRouter = require('./routers/home-router');
const russianRouter = require('./routers/russian-router');

// process.env.NODE_ENV === "local"

app.use('/api/home', homeRouter);
app.use('/api/russian', russianRouter);

app.use(express.static(path.resolve(__dirname, '..', 'public_html/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public_html/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Server running... http://localhost:${PORT}/`));
