function Sum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById("ORAH").textContent = "(Added) " + sum;
  }

  function Diff() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var dif = num1 - num2;
    document.getElementById("ORAH").textContent = "(Subtracted) " + dif;
  }

  function Times() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var times = num1 * num2;
    document.getElementById("ORAH").textContent = "(Multiplied) " + times;
  }

  function Div() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var divi = num1 / num2;
    document.getElementById("ORAH").textContent = "(Divided) " + divi;
  }