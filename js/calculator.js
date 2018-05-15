class ComplexNumber {
    constructor(realPart, imaginaryPart) {
        this.realPart = realPart;
        this.imaginaryPart = imaginaryPart;}

    plus(number) {
        var realPart = this.realPart + number.realPart;
        var imaginaryPart = this.imaginaryPart + number.imaginaryPart;
        return new ComplexNumber(realPart, imaginaryPart);}

    minus(number) {
        var realPart = this.realPart - number.realPart;
        var imaginaryPart = this.imaginaryPart - number.imaginaryPart;
        return new ComplexNumber(realPart, imaginaryPart);}

    multiply(number) {
        var realPart = this.realPart * number.realPart - this.imaginaryPart * number.imaginaryPart;
        var imaginaryPart = this.realPart * number.imaginaryPart + this.imaginaryPart * number.realPart;
        return new ComplexNumber(realPart, imaginaryPart);}

    divide(number) {
        var denom = number.realPart * number.realPart + number.imaginaryPart * number.imaginaryPart;
        var realPart = (this.realPart * number.realPart + this.imaginaryPart * number.imaginaryPart) / (number.realPart * number.realPart + number.imaginaryPart * number.imaginaryPart) ;
        var imaginaryPart = (this.imaginaryPart * number.realPart - this.realPart * number.imaginaryPart) / (number.realPart * number.realPart + number.imaginaryPart * number.imaginaryPart);
        return new ComplexNumber(realPart, imaginaryPart);}

    show() {
        if (this.imaginaryPart == 0) {
            return this.realPart.show();}
        else if (this.realPart == 0) {
            if (this.imaginaryPart < 0) {
                return this.imaginaryPart === -1 ? "-i" : this.imaginaryPart + "i";}
            return this.imaginaryPart === 1 ? "i" : this.imaginaryPart + "i";}
        else if (this.imaginaryPart < 0) {return this.realPart + " - " + (this.imaginaryPart === -1 ? "i" : Math.abs(this.imaginaryPart) + "i");}
        return this.realPart + " + " + (this.imaginaryPart === 1 ? "i" : this.imaginaryPart + "i");}

    static reg(string) {
        var regExp = /^([-+]?\d+(?:\.\d+)?(?!i))?([-+]?(?:\d+(?:\.\d+)?)?i)?$/;
        var a = regExp.exec(string);
        var realPart = a[1] ? parseFloat(a[1]) : 0;
        var imaginaryPart;
        if (a[2] === "+i" || a[2] === "i") {imaginaryPart = 1;}
        else if (a[2] === "-i") {imaginaryPart = -1;}
        else {imaginaryPart = a[2] ? parseFloat(a[2].replace("i"), "") : 0;}
        return new ComplexNumber(realPart, imaginaryPart);
    }

}
function complexCalc() {
        var n1 = ComplexNumber.reg(document.getElementById("n1").value.replace(",", "."));
        var n2 = ComplexNumber.reg(document.getElementById("n2").value.replace(",", "."));
        var operator = document.getElementById("op").value;

        if (operator === "+") {document.getElementById("res").value = n1.plus(n2).show();}
        else if (operator === "-") {document.getElementById("res").value = n1.minus(n2).show();}
        else if (operator === "/") {document.getElementById("res").value = n1.divide(n2).show();}
        else if (operator === "*") {document.getElementById("res").value = n1.multiply(n2).show();}
}
