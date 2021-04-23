const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const contactsRouter = express.Router();

contactsRouter.post('/', urlencodedParser, (req, res) => {
    const db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB,
        database: process.env.DB,
        password: process.env.PASS,
    });

    console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    const {
        body: { email, name, phone, message },
    } = req;

    return db.query(
        'INSERT INTO requests (email, name, phone, message) VALUES (?, ?, ?, ?)',
        [email, name, phone, message],
        (err, data) => {
            if (err) throw err;
            db.end();
            return res.send(data);
        }
    );
});

module.exports = contactsRouter;
