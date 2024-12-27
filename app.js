const express = require("express");
const app = express()

const addRoutes = require('./routes/add');
const subRoutes = require("./routes/sub");
const mulRoutes = require("./routes/mul");
const divRoutes = require("./routes/div");

const  errorRoutes = require("./routes/404");


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine","ejs");
app.set("views","views");

app.get("/",(req,res,next) => {
    res.render("index")
});
app.use(addRoutes.abc)
app.use(subRoutes.abc1)
app.use(mulRoutes.abc2)
app.use(divRoutes.abc3)

app.use(errorRoutes.abcd)

app.listen(80);