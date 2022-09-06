const express = require('express')
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        // siin tuleb panna mingi muu response kui json
            "hello":"amen"
    }
    )
});

app.use("/.netlify/functions/main",router)

module.exports.handler = serverless(app);