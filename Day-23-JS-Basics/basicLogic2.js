//avg of 3 numbers

function averageThree(){
    //input
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);
    //process
    let sum= n1 + n2 +n3;
    let avg = sum/3;
    //output
    document.getElementById("res").value=avg
    }
