const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', async function (req, res) {
    try {
        res.json({"mame": "Andrey"});
    } catch (err) {
        console.log(err);
    }
});

module.exports = homeRouter;
