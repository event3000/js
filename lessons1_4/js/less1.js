// коммент одн-ый
 /*  
 мног-ый коммент 
 */

 'use strict'; // строгий режим ошибок
 console.log("Less 1 log","info"); // логи для отладки
 var varName; // 5 станд объявл/создание переменной - состоит из букв, цифр (не в нач),  , _ подчерк да , ИСКЛ $ не исп-ем и дефис нет

varName = 45; // присвоение переменной знечения
varName = "new val"; // переопр-е значения переменной
console.log(window); //все здесь


let varName2 = "value"; // в 6ой версии так
let var1, var2, var3;


//ТИПЫ ДАННЫХ (простые и составные)

//  ----- ПРОСТЫЕ ТИПЫ ДАННЫХ


// 1 СТРОКИ
let str = "строковоый тип 'цифра' данных";
// \n перенос
// let str = "строковоый тип \"цифра\" данных";
str = '56';

//  все что в кавычках строка
console.log("str:", str);

//2 ЛОГИЧЕСКИЕ ТИП (БУЛЕВЫ ТИПЫ)

let Boo =  true;
let boo2 = false;

// !!! ВЫУЧИТЬ - к false перобразся 
// 	0
//	""
// null
// undefined

// console.log(0 == false);
// console.log(" " == false);
// console.log("" == false);

//3  ЦЕЛ ЧИСЛА INTEGR и ПЛАВ ТОЧКА FLOAT (мб отриц полож и ноль)

//функц

// isNaN(someVar); // проверка на не число  true и false

console.log("56", isNaN(56));
console.log("'56'", isNaN(56));
console.log("afafaf", isNaN(56));
console.log("'56'", isNaN(56));
console.log("false", isNaN(56));
console.log("true", isNaN(56));
console.log("", isNaN(56));


//4 NULL UNDEFINED (ничего)

let nullVar =  null; // вседга так перед
let undefVar; 


// опр-е тип переменной (если null объект)
let someNum = 78;
let someNum1 = 78.885336;
let peR = null;
let bUl = true;

typeof str;

console.log("str будет", typeof str);
console.log("someNum будет", typeof someNum);
console.log("peR будет", typeof peR);
console.log("bUl будет", typeof bUl);

// нельзя исп-ть зарезерв-ые слова в названии переменных function / number / и тд


// -------------- ОПЕРАТОРЫ (символы операндов)

// 1) арифм-кие + | - | * | / | %(дел по модулю ост деления)

console.log("55" - 10);
console.log("fsfs" - 10);
console.log("55" + 10); // конкатенация - склеивание строк - преобраз не будет
console.log("aa" + "vv");
console.log(2 ** 4); // возв в степень
console.log(0.1 + 0.2); 
console.log(99999999999999999);


// 2) операторы присваивания 
// = присваивание 
// += / -= / *= /  /= / %=

let a = 30;
a = a + 10;
a += 10;

console.log(10%3); // остаток от деления 1

//3) ОПЕР-РЫ СРАВНЕНИЯ
// == равен-во
// != не равенство
// === идентичность (только для условий)
// !== не идентичность

console.log("==", 0 == false);
console.log("==", 0 === false);

// > бол
// < мен
// >= бол или равно
// <= мен или равно

console.log(10 > 3);

// !! инкремент и декремент (умен на еденицу)
// ++a - префиксный инкремент
// a++ - постфиксный инкремент

// --a - префиксный декремент
// a-- - постфиксный декремент
// let x = 2;
let y = 9;

// console.log(x++,  x++ );
// console.log(x++);

/// ТЕРНАРНЫЙ ОПЕРАТОР "?"

let z = 2;
let v = 9;

let result = z < v ? "усл1 " : "усл2" ;



console.log(result);

let now = new Date(); 

console.log("сейчас", now);

let sec = now.getSeconds();
console.log("сейчас", sec);
let month = now.getMonth();


// ЗАДАЧА раб свет-ра в нач кажд часа 
// в теч 3х минут горит зеленый
// в теч 1мин желтый
// в теч 1 мин красный 
// потом повторение
// надо узнать какой цв горит в данный момент


// можно секунды бр - повторение 5 мин в нач кажд часа - остат от делен - тернарн оператор
// 5 мин есл без остатка знач зелен

//0 1 2 зеленый
//3 - желт
//4 - красн


let res = sec%5 >= 0 && sec%5 < 3 ? "green" : sec%5 === 3 ? "yellow" : "red";

console.log(sec, res);
// alert('ssss alert');

console.log("","",);







