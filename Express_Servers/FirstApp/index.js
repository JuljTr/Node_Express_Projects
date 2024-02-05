const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request")
// })

app.get('/', (req, res) => {
    res.send("HOME PAGE REQUEST")
})
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1> Browsing the: ${subreddit} </h1>`);
})
app.get('/info', (req, res) => {
    res.send("INFORMATION PAGE REQUEST");
})
app.get('/contact', (req, res) => {
    res.send("CONTACT PAGE REQUEST");
})
app.get('*', (req, res) => {
    res.send("ERROR PATH NOT KNOW");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

