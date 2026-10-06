function evenOdd() {
    let num = parseInt(document.getElementById("num1").value);
    let result;
    if (num % 2 == 0) {
        result = num + " is an even number";
    }
    else {
        result = num + " is an odd number";
    }
    document.getElementById("res1").value = result;
}

function smallest(){
    let value1 = parseInt(document.getElementById("val1").value);
    let value2 = parseInt(document.getElementById("val2").value);
    let result2;
    if(value1 > value2){
        result2 = value2 + " is the smallest number"
    }
    else{
         result2 = value1 + " is the smallest number"
    }
    document.getElementById("res2").value = result2;
}


function divisible(){
    let num3 = parseInt(document.getElementById("num3").value);
    let result3;
    if(num3%5==0){
        result3 = num3 + " is divisible by 5"
    }
    else{
        result3 = num3 + " is not divisible by 5"
    }
    document.getElementById("res3").value = result3;
}

function positive(){
    let num4 = parseInt(document.getElementById("num4").value);
    let result4;
    if (num4 > 0){
        result4 = num4 + " is a positive number";
    }
    else{
        result4 = num4 + " is a negative number";
    }
    document.getElementById("res4").value = result4;
}

function discount(){
    let bill = parseInt(document.getElementById("bill").value);
    let discount = 0;
    let finalAmount;
    if(bill > 5000){
        discount = bill * (20/100);
        finalAmount = bill - discount;
    }
    else{
        finalAmount = bill
    }
    document.getElementById("discount").value = discount
    document.getElementById("finalamount").value = finalAmount
}