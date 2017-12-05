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







