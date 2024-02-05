const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request")
// })

app.get('/', (req, res) => {
    res.send("HOME PAGE REQUEST")
})
app.get('/info', (req, res) => {
    res.send("INFORMATION PAGE REQUEST")
})
app.get('/contact', (req, res) => {
    res.send("CONTACT PAGE REQUEST")
})
app.get('*', (req, res) => {
    res.send("ERROR PATH NOT KNOW")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

