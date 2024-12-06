let fruits;
let fruitDialog = document.querySelector("#fruitDialog");
let dialogName = document.querySelector("#dialogText");
let dialogQty = document.querySelector("#dialogQty");

async function refresh() {
    let response = await fetch("http://localhost/PONIO-DIT4/api/get-fruits.php");
    fruits = await response.json();
    console.log(fruits);

    let main = document.querySelector("main");


    main.innerHTML = "";
    for (const item of fruits) {
        main.innerHTML += `
        <div class="item">
        <img src="images/${item.images}.png" alt="">
        <h2>${item.fruit}</h2>
        <h3>${item.qty}</h3>
        <h3>${item.price} / ${item.units}</h3>
        <button onclick="buy(${item.id})">BUY</button>
        </div>
        `;
    }
}


async function buy(id) {
    fruitDialog.showModal();

    let currentFruit = fruits.find(fruit => fruit.id == id);

    inputId.value = id;
    dialogName.innerHTML = currentFruit.fruit;
    dialogQty.max = currentFruit.qty;
}

async function submitHandler() {
    let id = inputId.value;
    let amount = dialogQty.value;

    await fetch(`http://localhost/PONIO-DIT4/api/buy-fruit.php?id=${id}&amount=${amount}`); 
    dialogQty.value = "";
    refresh();
}


refresh();