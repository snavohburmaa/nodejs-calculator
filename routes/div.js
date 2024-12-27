const express = require("express");
const router = express.Router();
const workController = require('../controllers/work');
router.post('/div', workController.Div);

router.get("/div",workController.getdiv); 

exports.abc3 = router;