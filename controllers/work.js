const number = require('../models/num');
const calculator = require("../models/num");

exports.Add = (req,res,next) => {
    const first = parseFloat(req.body.firstnumber);
    const second = parseFloat(req.body.secondnumber);
    const addnum = new calculator(first,second);
    const total = addnum.add()
    console.log(total)
    res.render("add",{add: total, first: first, second: second})
};

exports.getadd = (req,res,next) => {
    res.render("add",{add: 0,first: 0, second: 0})
};



exports.Mul = (req,res,next) => {
    const fir = parseFloat(req.body.firstnumber);
    const sec = parseFloat(req.body.secondnumber);
    const mulnum = new calculator(fir,sec);
    const total = mulnum.mul()
    console.log(total)
    res.render("mul",{mul : total, first: fir, second: sec});
};

exports.getmul = (req,res,next) => {
    res.render("mul",{mul : 0, first: 0, second: 0})
};

exports.Sub = (req,res,next) => {
    const firstnum = parseFloat(req.body.firstnumber);
    const secondnum = parseFloat(req.body.secondnumber);
    const subnum = new calculator(firstnum,secondnum);
    const total = subnum.sub()

    res.render("sub",{sub: total,first: firstnum, second: secondnum})
};

exports.getsub = (req,res,next) => {
    res.render("sub",{sub: 0 ,first: 0, second: 0})
};

exports.Div = (req,res,next) => {
    const firstno = parseFloat(req.body.firstnumber);
    const secondno = parseFloat(req.body.secondnumber);
    const divnum = new calculator(firstno,secondno);
    const total = divnum.div()

    res.render("div",{div: total, first : firstno , second: secondno})
};
exports.getdiv = (req,res,next) => {
    res.render("div",{div : 0, first: 0, second: 0})
};

