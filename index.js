const express = require('express');
const path = require('path');
const app = express();
// const sass = require('node-sass')

app.use(express.static(__dirname))

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log('listening on 8080')