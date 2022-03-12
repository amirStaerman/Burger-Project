

let total = 1;
updatePrice();


document.getElementById('rmv-tomato').disabled = true;
document.getElementById('rmv-meat').disabled = true;
document.getElementById('rmv-lettuce').disabled = true;
document.getElementById('rmv-cheese').disabled = true;

function toAdd(id, cssName, price, btnId){

    const toAdd = document.getElementById(id);
    const plus = document.createElement('div');
    plus.classList.add(cssName);
    toAdd.appendChild(plus);
    total += price;
    updatePrice();
    document.getElementById(btnId).disabled = false; 

}

function toRemove(id, cssName, price, btnId){

    const toDeduct = document.getElementById(id);
    const minus = document.getElementsByClassName(cssName)[0];
    toDeduct.removeChild(minus);
    total -= price;
    if (toDeduct.childNodes.length === 0){
        document.getElementById(btnId).disabled = true;
    }
    updatePrice();
}

function updatePrice(){

    const price = document.getElementById('price');
    price.textContent='Price: ' + total + '$';
}

function order(){
    alert('Thank you');
}