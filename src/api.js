const express = require('express')
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Tere, " + req.query.information)
});

app.use("/.netlify/functions/api",router)

module.exports.handler = serverless(app);