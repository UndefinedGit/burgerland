
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount")
    // Masik megoldassal is mukodik   
    // let showAmount =document.querySelector("span[class='show-amount']")
    let amountNumber = parseInt(amountInput.value);

    // megvizsgalja, hogy NaN erteke van-e, ha igaz (true) 0-ra allitja
    /* 

    if (isNaN(amountNumber))
    {
        amountNumber=0;
    }

    */
amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("10-nél kevesebbet rendelhetsz csak");
    }
    else if (amountNumber < 1) {
        alert("Legalább 1-et kell rendelned");

    }
    else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }


    //teszteleshez
    // alert("fizetendő: " + amount + " Ft");
}
