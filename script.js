//Задание 1

console.log("Задание 1");
let a = 0;
while (a < 100) {
    let check = true;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(a);
    a++;
}



//Задание 2

console.log("Задание 2");
let basket = [
    {
        product: "карандаш",
        price: getNumber(50, 100)
    },
    {
        product: "бумага",
        price: getNumber(50, 100)
    },
    {
        product: "ручка",
        price: getNumber(50, 100)
    },
    {
        product: "файл",
        price: getNumber(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Номенклатура " + prod.product + " стоимость: " + prod.price);
}
console.log("Стоимость корзины: " + basketPrice + " р");


//Задание 3

console.log("Задание 3");
function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " р");