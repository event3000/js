// LESS 2-4 ФУНКЦИИ
//console.log();

 'use strict'; 
console.log("функции");


 // какой сейчас время года
var date = new Date(); 
var x = date.getMonth() + 1;

console.log();

if (x < 3 || x === 12) {
console.log("cейчас зима");
} else if (x >= 3 && x <=5) {
console.log("cейчас весна");
} else if (x >= 6 && x <=8) {
console.log("cейчас лето");
} else if (x >= 9 && x <=11) {
console.log("cейчас осень");
} else {
console.log("неизвестно какое сейчас время года");
}






// именн функ-ции
function prFn () {
	console.log(prFn);
} 

prFn();

function helloUser(user_name){
	console.log("Hello", user_name);
}

helloUser("Петя");

function shAllUs() {
	for (var i = 0; i < arguments.length; i++) { // arguments - перебор массива переданных аргументов
		console.log('user ' + (i+1), arguments[i] );
	}
}

shAllUs("Вася", "Петя", "Гриша");

function printUserInfo(name, surname){
	surname = surname ||  "фамилия не известна"; // знач по умолчанию
	console.log(name, surname)
}

printUserInfo("Ivan");

// function printUserInfo(name, surname="фамилия не известна"){
// 	console.log(name, surname)
// }

// printUserInfo("Ivan");


// подсчет данных функция
function summIt(a, b) {
	if (chType(a,b)) { // проверка с исп-ем функции ниже
		// console.log("!!!", a + b);
		return a + b;
	}
	
						
}
summIt(10,20);

// проверка на тип данных
function chType(a, b){
	
	if(typeof a !== "number" || typeof b !== "number" ){
		console.log("Error");
		return false;
	} else {
		console.log(a + b);
		return true;
	}

}

let res11 = chType(10,50);
console.log(res11);

//2 анонимные функции


var x = function(num) {
	if (num%2 === 0) {
		return "четное";
	} else {
		return "не четное";
	}

};
console.log(x(9));


//
function pow(x, n){
	if (n !==1 ) {
		return x * pow(x, n - 1);

	} else {
		return x;
	}
}

console.log(pow(2,5));

// замыкание - 1 функ отработана - 2я функ сохранила переменную
function counter(arg){
	var num = 0;
	return function(arg) {
		return num++;
	}
}

var all = counter;
console.log(all());


//контекст вызова this

// var user_name = "van";

// function shName() {
// 	//'use strict'; 
// 	// console.log(this.user_name);
// 	this.user_name = "new name";
// 	console.log(this.name);
// }

// showName();

// что бы не засорять window -  самовыз функция в обертке
// все переменные только здесь

(function(global){
	'use strict';
	// code
}());



//======================== 
console.log(" ----------- Модальные окна");

// function() {
// 	 'use strict'; 
// 	 	// let arr = [2, 5, 8, 45];
// 	 	//arr.includes('45'); 
		


// }());



// alert("message"); //  приост скрипт и показ модального окна
// console.log();

// var x = prompt("ttt","text"); // поле для ввода, возврат в переменную
console.log(x, "тип данных", typeof x); // число будет все равно строка

//перевод строки в число
var num = +"fafa832"; // не всегда подходит будет NaN c  цифрой норм


var str = "23.6 fjjs 78s"
// parseInt(str); // считает первое целое число
parseInt(str, 10); // 2 арг система счичления
console.log(parseInt(str, 10));

var str = "21.88842 fjjs 78s"
parseFloat(str); // подсчет десятичных чисел (c плав точкой)
console.log(parseFloat(str));

// Перед проверкой проверять на числа isNaN или typeof

console.log(" ----------- Модальные окна  Confirm");

// var confirmRes = confirm("vopros ?"); // окно с 2мя кнопками да/нет
// console.log(confirmRes); // возврат true или false


console.log(" ----------- СТРОКИ");
	var str ="String";
 	str = "faf 'afafaf' affaaf";
 
 	str = "sfs ssgsg \\sfsgs \\n"; 

 	// методы и свойства строк
	
 	str ="fafafafaf424";
 	console.log(str.length); // св-во подсчет длины строки с нуля

 	str ="fafafafaf424";
 	// console.log( str.charAt(2) );						// метод возврат символа по индексу
 	console.log( str[7] );	 // можно так

 	//indexof узнать позицию символа начиная с опр индекса - если нет возврат -1
 	str ="text good";
 	console.log(str.indexOf("good", 0));

 	//перевод в строчные и прописные буквы - регистр - возврат в новую строку
	str ="Text Good";
	console.log(str.toLowerCase());
	console.log(str.toUpperCase());	


// взятие подстроки substr - начиная с индекса возвращает строку
console.log(str.substr(2,4));

// start - end (не вкл end) 
console.log(str.substring(2,4));

//slice аналогично substring  - можно отриц зачения с конца строки

// сравнение строк  - 1 если одна стр больше / -1 наоборот / 0 если равны (алфавит влияет)
var str1 ="la la la";
var str2 ="La ";

console.log(str1.localeCompare(str2));

console.log();


