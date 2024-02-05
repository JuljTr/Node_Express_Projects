const express = require("express");
const app = express();

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.send("HI")
})

app.listen(8080, ()=> {
    console.log("LISTENING ON PORT 8080")
})
