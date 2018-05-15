function init() {
  document.getElementById("add").checked = true;
  document.getElementById('additionImg').style.display = 'block';
}
window.onload = init;

function calc() {
  //Get state of radiobutton
  var additionIsSelected = document.getElementById("add").checked;
  var substractionIsSelected = document.getElementById("sub").checked;
  var multiplyIsSelected = document.getElementById("mul").checked;
  var divisionIsSelected = document.getElementById("div").checked;

  //Get entered values
  var realNumber1 = parseFloat(document.getElementById("r1").value);
  var imaginaryNumber1 = parseFloat(document.getElementById("i1").value);
  var realNumber2 = parseFloat(document.getElementById("r2").value);
  var imaginaryNumber2 = parseFloat(document.getElementById("i2").value);

  //Set empty inputfiels to 0
  if (isNaN(realNumber1)) {
    realNumber1 = 0;
    document.getElementById("r1").value = 0;
  }
  if (isNaN(imaginaryNumber1)) {
    imaginaryNumber1 = 0;
    document.getElementById("i1").value = 0;
  }
  if (isNaN(realNumber2)) {
    realNumber2 = 0;
    document.getElementById("r2").value = 0;
  }
  if (isNaN(imaginaryNumber2)) {
    imaginaryNumber2 = 0;
    document.getElementById("i2").value = 0;
  }


  //Addition
  var result;
  if (additionIsSelected) {
    var rn = realNumber1 + realNumber2;
    var im = imaginaryNumber1 + imaginaryNumber2;
    var operator
    if (im < 0) {
      operator = "";
    } else {
      operator = "+";
    }
    result = "" + rn + operator + im + "i";
    document.getElementById("answer").value = result;
  }
  //Substraction
  if (substractionIsSelected) {
    var rn = realNumber1 - realNumber2;
    var im = imaginaryNumber1 - imaginaryNumber2;
    var operator
    if (im < 0) {
      operator = "";
    } else {
      operator = "+";
    }
    result = "" + rn + operator + im + "i";
    document.getElementById("answer").value = result;
  }
  //Multiplication
  if (multiplyIsSelected == true) {
    var rn = (realNumber1 * realNumber2) - (imaginaryNumber1 * imaginaryNumber2);
    var im = (realNumber1 * imaginaryNumber2) + (realNumber2 * imaginaryNumber1);
    var operator
    if (im < 0) {
      operator = "";
    } else {
      operator = "+";
    }
    result = "" + rn + operator + im + "i";
    document.getElementById("answer").value = result;
  }
  //Division
  if (divisionIsSelected == true) {
    var rn = ((realNumber1 * realNumber2) + (imaginaryNumber1 * imaginaryNumber2)) / (realNumber2 * realNumber2 + imaginaryNumber2 * imaginaryNumber2);
    var im = (-1 * (realNumber1 * imaginaryNumber2) + (realNumber2 * imaginaryNumber1)) / (realNumber2 * realNumber2 + imaginaryNumber2 * imaginaryNumber2);
    var operator
    if (im < 0) {
      operator = "";
    } else {
      operator = "+";
    }
    result = "" + rn + operator + im + "i";
    if (!isNaN(rn) && !isNaN(im)) {
      document.getElementById("answer").value = result;
    } else {
      document.getElementById("answer").value = "Man kann nicht durch 0 teilen!"
    }
  }
}
