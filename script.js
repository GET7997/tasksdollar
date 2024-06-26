var Rform = document.querySelector(".reg");
 
Rform.onsubmit = function(e){
    e.preventDefault();
    var amount = parseFloat(document.getElementById('amount').value);
    var exchange = document.getElementById('exchange').value;
    var result;
    if (exchange === 'Dinar') {
        result = amount * 5;
    } else if (exchange === 'Dollar') {
        result = amount * 3.5;}
        else if (exchange === 'Nis') {
            result = amount * 1;}
    console.log(result);

}

