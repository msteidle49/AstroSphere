function goBack() {
    window.location.href = window.location.href.split('/', window.location.href.split('/').length-1).join('/');
}




 shoppingCart=[];

class Artikel {
    constructor(type, anzahl, preis) {
        this.type = type;
        this.anzahl = anzahl;
        this.preis = preis;
    }
}

function addItemToCart(type, anzahl, preis){
    aktItem = new Artikel(type, anzahl, preis);
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        if (item.type === type) {
            item.anzahl += anzahl;
            return;
        }
    }
    shoppingCart.push(aktItem);
}

function removeItemFromCart(type, anzahl){
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        if (item.type === type) {
            item.anzahl -= anzahl;
            if (item.anzahl <= 0) {
                shoppingCart.splice(i, 1);
            }
            return;
        }
    }
    console.log(`Artikel ${type} nicht gefunden.`);
}



function goTo_shoppingCart(){
    if(document.getElementById('shopping_Cart').style.display=="flex"){
        document.getElementById('shopping_Cart').style.display="none";    
    }
    else{
        document.getElementById('shopping_Cart').style.display="flex";
    }
    
}

function cancel_Order(){
    console.log("cancel Order");
    shoppingCart=[];
    document.getElementById('shopping_Cart').style.display="none";
}
function buy_Order(){
    console.log("buy Order");
}

