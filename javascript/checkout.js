function hideBillingAdress(){
    if(document.getElementById('billingadress').style.display != "none"){
        document.getElementById('billingadress').style.display="none";

    }else{
        document.getElementById('billingadress').style.display="block";

    }
    
}

function payby(){
    if(document.getElementById('paybycard').style.display != "none"){
        // document.getElementById('paybycard').style.display = "none";
        document.getElementById('paybycard').innerHTML = "You will be directed to PayPal to complete the purchase.";

    }else{
        document.getElementById('paybycard').style.display = "block";
        
    }
    
    
  

    
}