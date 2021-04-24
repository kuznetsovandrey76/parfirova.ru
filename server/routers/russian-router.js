const express = require('express');
const mysql = require('mysql2');
const camelcaseKeys = require('camelcase-keys');

const russianRouter = express.Router();

russianRouter.get('/', async (req, res) => {
    try {
        const db = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.DB,
            database: process.env.DB,
            password: process.env.PASS,
        });

        db.query('SELECT * FROM russian', (err, results) => {
            if (err) throw err;
            db.end();
            return res.json(camelcaseKeys(results));
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = russianRouter;
