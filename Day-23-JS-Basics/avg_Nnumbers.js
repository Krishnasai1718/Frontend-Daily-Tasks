function avgNnumbers(){
    let n = parseInt(document.getElementById("n").value);
    let sum = n *( (n+1)/2);
    let avg = sum/n;
    document.getElementById("res").value=avg;
}