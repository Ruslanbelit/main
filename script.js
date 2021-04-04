
/*Задание 1*/

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  так как оператор унарный и его форма является префиксной, значение выглядит так 1+1, так первый плюс это 1, второй знак сложения и а=1
d = b++; alert(d);           // 1  так как оператор унарный и его форма является постфиксной, значение выглядит так 1+1, так первый плюс это 1, второй знак сложения и а=1, а потом идет вывод предыдущего значения
c = (2+ ++a); alert(c);      // 5 так как в прощлом мы уже получили 2 и к нему прибавляем еще 1 и того выражение 2+1+2=5
d = (2+ b++); alert(d);      // 4 так как в прошлом мы уже получили 2 к нему прибавляем еще 1 получаем 3, но так как мы возвращаем предыдущее значение получаем 2+2
alert(a);                    // 3 так как  прибавили единицу в примере 1 и примере 3
alert(b);                    // 3 так как прибавили единицу в примере 2 и примере 4



/*Задание 2*/

var a = 2;
var x = 1 + (a *= 2);  // 5 так как в выражении идет умножение с присвоением, а значит получается так 1+(а=2*2)=5



/*Задание 3*/

var a =  +prompt ("Введите 1-ое число");
var b = +prompt ("Введите 2-ое число");
if (a > 0 && b > 0){
    x = a - b;
    alert(x);
}    
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert (x);
}
else if (a < 0 && b < 0){
    x = a * b;  
    alert (x);
}


/*Задание 4*/


a = +prompt ('Введите число от 1 до 15');
switch (a) {
case 1:
alert ( 'Ваше число 1');
break;
case 2:
alert ( 'Ваше число 2');
break;
case 3:
alert ( 'Ваше число 3');
break;
case 4:
alert ( 'Ваше число 4');
break;
case 5:
alert ( 'Ваше число 5');
break;
case 6:
alert ( 'Ваше число 6');
break;
case 7:
alert ( 'Ваше число 7');
break;
case 8:
alert ( 'Ваше число 8');
break;
case 9:
alert ( 'Ваше число 9');
break;
case 10:
alert ( 'Ваше число 10');
break;
case 11:
alert ( 'Ваше число 11');
break;
case 12:
alert ( 'Ваше число 12');
break;
case 13:
alert ( 'Ваше число 13');
break;
case 14:
alert ( 'Ваше число 14');
break;
case 15:
alert ( 'Ваше число 15');
break;
} 

/*Задание 5*/


var a = 2;
var b = 3;
function plus(a, b) {
return a + b;
}
function minus(a, b) {
return a - b;
}
function division (a, b) {
return a / b;
}
function multiplication (a, b) {
return a * b;
}


/*Задание 6*/

function mathOperation(arg1, arg2, operation){
switch(operation){
    case "сложение":
    return arg1 + arg2;
break;
    case "вычитание":
    return arg1 - arg2;
break;
    case "деление":
    return arg1 / arg2;
break;
    case "умножение":
    return arg1 * arg2;
break;
}
}


