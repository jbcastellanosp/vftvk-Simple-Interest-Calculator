// declaring variables computing interest
function compute() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate /100;
    year = new Date().getFullYear()+parseInt(years);
    future_year = year + Number(years);
    validar = principal;
}
// change value of range rate input
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//  decision for  result and alert on principal negative value 
function validate_num(){
    if (validar > 0){
        document.getElementById("result").innerText=
        "If you deposit <mark>" + principal + "</mark>,<br/>"+
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amout of <mark>" + interest + "</mark>,<br/>"+
        "in the year </mark>" + future_year + "</mark>,<br/>";
        }
    else {
        alert("Enter a positive number");
        focus.principal;
        return false;
    }
}