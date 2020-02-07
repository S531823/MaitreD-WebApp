function calculate() {
    var totalAmount = document.getElementById("totalInput").value;
    var rateAmount = document.getElementById("rateInput").value * 0.01; //convert whole number to percentage
    
    var tipAmount = totalAmount * rateAmount;
    var taxAmount = totalAmount * 0.055;
    var grandTotalAmount = parseFloat(totalAmount) + parseFloat(tipAmount) + parseFloat(taxAmount); //parseFloat converts the strings to floats
    
    //toFixed() rounds the values to the ()th decimal
    document.getElementById("tipInfo").innerHTML = "$" + tipAmount.toFixed(2);
    document.getElementById("taxInfo").innerHTML = "$" + taxAmount.toFixed(2);
    document.getElementById("grandTotalInfo").innerHTML = "$" + grandTotalAmount.toFixed(2);
}
