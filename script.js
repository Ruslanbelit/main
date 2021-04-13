//Задание 1

console.log("Задание 1");
var max = 999;
var calculation = {
    число: +prompt("Введите число от 0-999"),
    еденицы: 0,
    десятки: 0,
    сотни: 0,
};
if (calculation.число <= 9){
    calculation.число = calculation.еденицы;
} 
else if (calculation.число <= 999){
    calculation.сотни = Math.floor(calculation.число / 100 % 10);
    calculation.десятки = Math.floor(calculation.число / 10 % 10);
    calculation.еденицы = Math.floor(calculation.число % 10);
}
else {
    calculation.число = 0;
    console.log("Введено неверное число");
}
console.log(calculation);

/*2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)*/

