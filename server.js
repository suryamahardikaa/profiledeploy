const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
const host = '0.0.0.0';

app.use(express.static('public'));


app.listen(port, host);
console.log(`Running on http://${host}:${port}`);