class calculator{
    constructor(num1,num2) {
        this.num1 = num1
        this.num2 = num2
    }
    add (){
        return this.num1 + this.num2 
    }
    sub() {
        return this.num1 - this.num2
    }
    mul() {
        return this.num1 * this.num2
    }
    div() {
        return this.num1 / this.num2
    }
};

module.exports = calculator;