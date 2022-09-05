var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{"response": "Hello world"}');
});

app.get('/other', function (req, res) {
    res.send('{"response": "Hello from the other side"}');
});


app.listen(process.env.PORT || 3000);
module.exports = app;