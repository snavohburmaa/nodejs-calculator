const express = require("express");
const router = express.Router();

const workController = require('../controllers/work');
router.post("/mul", workController.Mul);

router.get("/mul",workController.getmul);



exports.abc2 = router