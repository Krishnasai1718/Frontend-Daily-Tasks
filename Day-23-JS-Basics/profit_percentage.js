function profitPercentage(){
    let sp = parseInt(document.getElementById("sp").value);
    let cp = parseInt(document.getElementById("cp").value);
    let profit = sp - cp;
    let profitPercentage = (profit/cp)*100;
    document.getElementById("res").value=profitPercentage;
}