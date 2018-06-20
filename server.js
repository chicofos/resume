var express = require('express');
var app = express();
var path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/404.html'));
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
})