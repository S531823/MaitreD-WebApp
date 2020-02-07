function calculate() {
    document.getElementById("errorMSG").innerHTML = ""; //clear error message
    
    //parseFloat converts the strings to floats
    var totalAmount = parseFloat(document.getElementById("totalInput").value);
    var rateAmount = parseFloat(document.getElementById("rateInput").value);
    
    if(isNaN(totalAmount)) {
        document.getElementById("errorMSG").innerHTML = "Put in a real dollar amount, ya dingus."
    }
    if(isNaN(rateAmount)) { //if rate input is not a valid input, set it to 0.0
        rateAmount = 0.0;
    }

    var tipAmount = parseFloat(totalAmount) * (parseFloat(rateAmount) * 0.01);
    var taxAmount = parseFloat(totalAmount) * 0.055;
    var grandTotalAmount = parseFloat(totalAmount) + parseFloat(tipAmount) + parseFloat(taxAmount);
    
    //toFixed() rounds the values to the ()th decimal
    if(isNaN(tipAmount)) {
        document.getElementById("tipInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("tipInfo").innerHTML = "$" + tipAmount.toFixed(2);
    }
    
    if(isNaN(taxAmount)) {
        document.getElementById("taxInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("taxInfo").innerHTML = "$" + taxAmount.toFixed(2);
    }
    
    if(isNaN(grandTotalAmount)) {
        document.getElementById("grandTotalInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("grandTotalInfo").innerHTML = "$" + grandTotalAmount.toFixed(2);
    }
}
