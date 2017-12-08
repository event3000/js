(function(){
'use strict';
// =======================================================================
// Задание 1
// (+) 1.1. создать 2 объекта sity1 и sity2 со следующими свойствами: 
// name, population, mayor 
// двумя разными способами (первый объект одним способом, второй другим)


// (+)1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)

// 1.3. Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)

// 1.4. Создать объект president c методом changeCountryMayor(), благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)

console.log("Задание 4-1:",);

let sity1 = {
	name: "S town",
	population: 5000,
	mayor: "Aron",
    nail: function(n) {
			 sity1.population = sity1.population + n;
			 sity2.population = sity2.population - n;
		},
};

let sity2 = new Object();
sity2.name = "J town";
sity2.population = 1000;
sity2.mayor = "Yakov";


// Вызов функции, в аргументе число людей (плюс или минус)
sity1.nail(600);
console.log("SITY1:",sity1,"SITY2:",sity2);



// Показ мэра города 1 способ
function showMayor_oth(x){
	if (x === sity1) {
		return sity1.mayor;
	} else if (x === sity2) {
			return sity2.mayor; 			
 	} else {
 		return "ошибка";
 	}
}

console.log("Показ мэра города (способ 1):",showMayor_oth(sity1));


//Показ мэра города 2 способ
function Show(){
  		return this.mayor;
 };

console.log("Показ мэра города (способ 2 call/apply):", Show.call(sity2));

let sh = Show.bind(sity2);
console.log("Показ мэра города (способ 2 bind):", sh());




// Создать объект president c методом changeCountryMayor(), благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)


let president = {
	changeM: function(sityName, newname) {
	return sityName.mayor = newname;
	},

};

president.changeM(sity2, "Vladimir");
console.log("Меняем мэра:", sity2);



// =======================================================================
// Задание 2

// Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку


console.log("Задание 4-2:");

function search (str, subst) {
	let pos = 0;

	while (true) {
	  let fndPos = str.indexOf(subst, pos);
	  if (fndPos === -1)

	  break;

	  console.log("найдено здесь:",fndPos ); 
	  pos = fndPos + 1; 
	}
}

search("It was a very difficult year. Next year will be better." , "year");






// =======================================================================
// Задание 3 (по рядам, нумерация от окна)


// 3 ряд: написать функцию runCalculator():

// 1)уточняет у пользователя, действительно ли он хочет запустить программу:

// 2) в случае положительного ответа:

// 2.1)получат данные из функции getDataFromUser(), вида [+a, operator, +b], например [1, "+", 5]

// 2.2)разбивает массив на отдельные переменные

// 2.3)вызывает функцию operations(a, operator, b), передавая в качестве аргументов, переменные из п.2)

// 2.4)результат работы operations выводит пользователю (для вывода использовать alert)

// 3) в случае отрицательного прощается с пользователем

console.log("Задание 4-3:");

// создаем функцию которая которая собирает данные в массив
function getDataFromUser(a,b,o){
 	let arr = [ a,b,o ];
	return arr;
};

// калькулятор (уже был дан)
function operations(a, operator, b) {
	if (operator === '+') { 
	return a + b;
	} else if (operator === '-') { 
	return a - b; 
	} else if (operator === '*') { 
	return a * b; 
	} else return a / b; 
}


// функция калькулятора 
function runCalculator(){

	let run  = confirm("Вы действительно хотите запустить программу?");

		if (run === true) {
			let dann = getDataFromUser(4,10,"+"); // получаем массив в переменную 
			let a = dann[0];
			let b = dann[1];
			let operator = dann[2];
			
			alert(operations(a, operator, b)); // переменные из массива в operations

	} else {
		alert("Всего доброго, до свидания!");
	}

};

// запуск функции калькулятора
runCalculator();






}() );