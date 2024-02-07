const express = require("express");
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/colors', (req, res) => {
    const colors = [
        'Yellow', 'Red', 'Purple', 'Green', 'Blue', 'Gray'
    ]
    res.render('colors', { colors })
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params)
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num });
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
})
