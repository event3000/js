'use strict'; 


// =======================================================
// Задача 1 (while) 
// Задать количество тарелок и количество моющего средства. 
// Моющее средство расходуется из расчета 0,5 на одну тарелку. 
// В цикле выводить сколько моющего средства осталось после мытья каждой тарелки 
// В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.


// =======================================================
// Задача 2 
// Создать таблицу соответствия между весом в фунтах и весом в килограммах для значений от 1 до 10








// =======================================================
// Задание 3
// Посмотреть, как работают методы для работы с массивами: join, slice, indexOf/lastIndexOf, concat.
// Разобрать по 1му примену на каждый из них. В субботу обсудим


// 1 JOIN - массив склеиваетcя в строку c помощью разделителя

let arrM31 = [50,90,"Hello",100,true];
var res31 = arrM31.join('; ');
console.log("ЗАДАНИЕ 3-1 - JOIN: " + res31);

// 2 SLICE - копирует эл-ты массива начиная с 1 элемента по 3 (не включая)

let arrM32 = ["house", "shop", "text", "margin"];
let arrM32_1 = arrM32.slice(1, 3); 
console.log("ЗАДАНИЕ 3-2 - SLICE: " + arrM32_1);

// 3  INDEXOF -   поиск индекса элемента в массиве по значению, если такого значения нет выведет -1
// 0 указ откуда вести поиск

let arrM33 = ["elem1", "elem2", "elem3" , "elem4"];
console.log("ЗАДАНИЕ 3-3 - INDEXOF: " + arrM33.indexOf("elem3", 0))

// 4 LASTINDEXOF - тоже самое как indexof только сканирует массив в обратном направлении
let arrM34 = ["elem1", "elem2", "elem3" , "elem4"];
console.log("ЗАДАНИЕ 3-4 - LASTINDEXOF: " +  arrM34.lastIndexOf("elem4"));

// 5 CONTAT - объединение неск-их массивов
let arrM35_1 = ["elem1", "elem2", "elem3" , "elem4"];
let arrM35_2 = [1,2,3,4,5];
console.log("ЗАДАНИЕ 3-5 - CONCAT: " + arrM35_1.concat(arrM35_2));



// =======================================================
// Задача 4
// Есть три вершины. Координаты вершин (x1, x2), (y1, y2), (z1, z2) заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
// В решении использовать только математические и логические операторы. Результат в консоль.
// Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!


// =======================================================
// Задача 5
// Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.






