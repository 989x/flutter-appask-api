const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const importData = require("./data.json")

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi!'
    });
});

router.get('/test', (req, res) => {
    res.json({
        'hello': 'test'
    });
});

//new

router.get('/asking', (req, res) => {
    res.send(importData);
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);