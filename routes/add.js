const express = require("express");

const router = express.Router();

const workController = require('../controllers/work');
router.post('/add', workController.Add);

router.get("/add",(req,res,next) => {
    res.render("add",{add: 0,first: 0, second: 0})
});

exports.abc = router;




