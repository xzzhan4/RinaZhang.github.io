function hideBillingAdress(){
    if(document.getElementById('billingadress').style.display != "none"){
        document.getElementById('billingadress').style.display="none";

    }else{
        document.getElementById('billingadress').style.display="block";

    }
    
}

function payby(){
    var sel = document.getElementById('paymethod').value;
    if(document.getElementById('paymethod').nodeValue === 'paypal'){
        document.getElementById('paybycard').style.display = "none";
    }

    
}