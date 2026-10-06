// write a program to display sum of two numbers

function addTwo() {
    // input
    let n1 = parseInt(document.getElementById("addNum1").value);
    let n2 = parseInt(document.getElementById("addNum2").value);

    // process
    let sum = n1 + n2;

    // output
    document.getElementById("addResult").value = sum;
}


// avg of 3 numbers
function averageThree() {
    // input
    let n1 = parseInt(document.getElementById("avgNum1").value);
    let n2 = parseInt(document.getElementById("avgNum2").value);
    let n3 = parseInt(document.getElementById("avgNum3").value);

    // process
    let sum = n1 + n2 + n3;
    let avg = sum / 3;

    // output
    document.getElementById("avgResult").value = avg;
}


// sum of n natural numbers
function addNnumbers() {
    let n = parseInt(document.getElementById("sumN").value);

    let sum = n * ((n + 1) / 2);

    document.getElementById("sumResult").value = sum;
}


// avg of n natural numbers
function avgNnumbers() {
    let n = parseInt(document.getElementById("avgN").value);

    let sum = n * ((n + 1) / 2);
    let avg = sum / n;

    document.getElementById("avgNResult").value = avg;
}


// triangle angle
function angle() {
    let a1 = parseInt(document.getElementById("angle1").value);
    let a2 = parseInt(document.getElementById("angle2").value);

    let totalSum = 180;
    let a3 = totalSum - a1 - a2;

    document.getElementById("angleResult").value = a3;
}


// simple interest
function simpleIntrest() {
    let p = parseInt(document.getElementById("principal").value);
    let t = parseInt(document.getElementById("time").value);
    let r = parseInt(document.getElementById("rate").value);

    let si = (p * t * r) / 100;

    document.getElementById("interestResult").value = si;
}