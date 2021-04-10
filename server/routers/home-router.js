const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const homeRouter = express.Router();

homeRouter.get('/', async (req, res) => {
    try {
        res.json({ name: 'Парфирова Ирина Андреевна' });
    } catch (err) {
        console.log(err);
    }
});

homeRouter.post('/', urlencodedParser, (req, res) => {
    const db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB,
        database: process.env.DB,
        password: process.env.PASS,
    });

    console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    const {
        body: { email, password },
    } = req;
    const date = new Date();

    // db.query('SELECT * FROM msgs', (err, results) => {
    //     if (err) throw err;
    //     console.log(results)
    //     db.end();
    //     return null;
    // });

    return db.query(
        'INSERT INTO users (email, password, date) VALUES (?, ?, ?)',
        [email, password, date],
        (err, data) => {
            if (err) throw err;
            db.end();
            return res.send(data);
        }
    );
});

module.exports = homeRouter;
