var totalAmount = [0, 0];
var productValue = [25.00, 20.00];
var qtd = [0, 0];

function AddItem(item){

    var amount = document.getElementById("amount" + item);
    var total = document.getElementById("total" + item);
    
    qtd[item] += 1;
    totalAmount[item] = Number.parseFloat(productValue[item]) * qtd[item];
    amount.innerHTML = qtd[item];
    total.innerHTML = totalAmount[item].toFixed(2);
    purchaseValue();
}

function removeItem(item){
    
    if(qtd[item] > 0){
        qtd[item] -= 1;
        var amount = document.getElementById("amount" + item);
        var total = document.getElementById("total" + item);
        amount.innerHTML = qtd[item];
        totalAmount[item] = Number.parseFloat(productValue[item]) * qtd[item];
        total.innerHTML = totalAmount[item].toFixed(2);
        purchaseValue();
    }
}

function purchaseValue(){

    var totalPurchaseAmount = document.getElementById("totalPurchaseAmount");
    var value = 0;

    for(var i = 0; i < totalAmount.length; i++){
        value += totalAmount[i];
    }

    totalPurchaseAmount.innerHTML = value.toFixed(2);
}