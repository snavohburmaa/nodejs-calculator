const express = require("express");
const router = express.Router();

const workController = require('../controllers/work');
router.post('/sub', workController.Sub);

router.get("/sub",(req,res,next) => {
    res.render("sub",{sub: 0 ,first: 0, second: 0})
});

exports.abc1 = router;