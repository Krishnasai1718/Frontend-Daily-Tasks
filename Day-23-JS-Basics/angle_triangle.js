function angle(){
    let a1 = parseInt(document.getElementById("ang1").value);
    let a2 = parseInt(document.getElementById("ang2").value); 
    let totalSum=180;
    let a3 = totalSum-a1-a2;
    document.getElementById("res").value=a3  
}