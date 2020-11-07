const express = require('express');


const app = express();
var port =process.env.port || 300;

app.get('/', (req, res) => res.send('hello'));

app.listen (port, () => console.log('server is running on port' + port));