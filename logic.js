function calculate() {
    var totalAmount = document.getElementById("totalInput").value;
    var rateAmount = document.getElementById("rateInput").value * 0.01; //convert whole number to percentage
    
    var tipAmount = totalAmount * rateAmount;
    var taxAmount = totalAmount * 0.055;
    var grandTotalAmount = parseFloat(totalAmount) + parseFloat(tipAmount) + parseFloat(taxAmount); //parseFloat converts the strings to floats
    
    document.getElementById("tipInfo").innerHTML = "$" + tipAmount;
    document.getElementById("taxInfo").innerHTML = "$" + taxAmount;
    document.getElementById("grandTotalInfo").innerHTML = "$" + grandTotalAmount;
}
