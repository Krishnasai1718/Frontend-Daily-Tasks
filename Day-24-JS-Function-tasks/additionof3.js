function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var sum = num1 + num2 + num3;
    document.write("The sum of " + num1 + ", " + num2 + ", and " + num3 + " is: " + sum);
}