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
    
}

function removeItem(item){
    
}

function purchaseValue(){
    
}