function addNnumbers(){
    let n = parseInt(document.getElementById("n").value);
    let sum = n *( (n+1)/2);
    document.getElementById("res").value=sum;
}