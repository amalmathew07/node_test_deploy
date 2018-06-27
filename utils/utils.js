var sum = (a,b) => {
    return a + b;
}

module.exports = {
    sum
}

const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.send("Hi");
})

app.listen(4000);