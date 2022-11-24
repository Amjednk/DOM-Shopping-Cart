
let totalprice = document.getElementById("gt");
let sum = 0;
// Plus Button
function plusClick(id) {
    console.log(id);
    let quantity = document.getElementById("qt" + id[2]);
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    let total = document.getElementById("st" + id[2]);
    let price = document.getElementById("ip" + id[2]);
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
    sum = parseInt(price.innerHTML) + sum;
    totalprice.innerHTML = sum;
}
// Minus Button
function minusClick(id) {
    console.log(id);
    let quantity = document.getElementById("qt" + id[2]);
    if (quantity.innerHTML>0){
        quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
        let total = document.getElementById("st" + id[2]);
        let price = document.getElementById("ip" + id[2]);
        total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML);
        sum = sum - parseInt(price.innerHTML);
        totalprice.innerHTML = sum;
    }
    
}

//Favorit Item
let favItem = document.getElementsByClassName("fas fa-heart");
for (let i = 0; i < favItem.length; i++) {
favItem[i].onclick = function () {
    favItem[i].classList.toggle("red"); //Or favItem[i].addEventListener("click", function () {favItem[i].classList.toggle("red");}
};
}

// Remove Item
let removeItem = document.getElementsByClassName("removeBtn");
for (let i = 0; i < removeItem.length; i++) {
removeItem[i].onclick = function () {
    removeItem[i].parentElement.remove();
};
}