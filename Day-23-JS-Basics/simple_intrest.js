function simpleIntrest(){
    let p = parseInt(document.getElementById("principal").value);
    let t = parseInt(document.getElementById("time").value);
    let r = parseInt(document.getElementById("rate").value);
    let si = (p * t * r)/100;
    document.getElementById("res").value=si
}