var sum = (a,b) => {
    return a + b;
}

module.exports = {
    sum
}
const port = process.env.PORT || 4000;
const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.send("Hi");
})

app.listen(port);