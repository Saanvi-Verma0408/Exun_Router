const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Go to /number to use app'));

app.get('/number/', function(req, res) {
    res.send('Go to /number/:num to check if the number you entered is prime or not');
});

app.get('/number/:num', function(req, res) {
    let number = req.params.num;
    var isPrimeno = "is prime";

    if (num == 1) {
        isPrimeno = "is not prime";
        res.send(`${num} is not prime`);
    }

    else{
        for (let i = 2; i < num; i++) {
            if (number % i === 0) {
              isPrimeno = "is not a prime";
            }};
        res.send(`${number} ${isPrimeno}`);
    }})

app.listen(port, () => console.log('Application is running'));
console.log("listening on port 3000");
