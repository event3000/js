// es6
let name = "User";

const ID = 4; // константа сразу присв значение и больш буквами и не может ее изменять (мб строк цифры что угодно)
// нельзя поменять значение

const USER = {
	id: 4,
	login: "link"
};

console.log(USER);

//аргументы по умолчанию
function summ(a, b=10) {

	return a + b;
}

console.log(summ(5));

// Стрелочные функции
(args) => body

// но в них нет контекста
let summ1 = (a, b) => a + b;
console.log(summ1(5,6));

// window.addEventListener("click", )

// ... spread / rest (собирает или разбивает массив например)


// ... SPREAD разбивает итерируемый объект на отдельные эл-ты
let arr = [1, 3, 8];
console.log(...arr); // разбивает на отд части


// let arr1 = {
// 	id:1,
// 	log: 2
// }

// console.log(...arr1);

// ... REST объединятель получаем массив
inArr(1, 5, 2, [5,9], "fsfa")

function inArr (...el) {
	console.log(el);
}

function getData() {
	let id = "afaf";
	let login = "aaa";

    // возврат в объект
	return {
		id, // или так id: id
		login,
		["admin" + login]: "value" // вычисляемое св-во
	}
}

let data = getData ();
 console.log(data);


 // super() начледование для объектов без класоов

let animal = {
	eat() {
		console.log("eat");
	}
}

let cat = {
	actions() {
		super.eat();
		console.log("actions");
	}
}

Object.setPrototypeOf(cat, animal);
cat.actions();

//es 5
// cat.__proto__animal;
// cat.eat();

///////////

//  for of - перебор массива 

let someArr = [1, 4, 2, 5];

for (let elem of someArr ) {
	console.log(elem);
}


// continue - пропускает итерацию
// break прерывает / выход из цикла


// СТРОКИ в ES6

let a = 4;
let b = 8;

//`  ` апострофы и ${}
console.log("a + b = " + (a+b) + "." );
console.log(`a + b  = ${ a + b }.`);

// MIXIN  (множеств-е наследование)

// гл класс
let mixinName = (superclass) => class extends superclass {
	method() {
		console.log("mixinName");
	}
}

// 2ой гл класс
class  Parent {
	parentMethod() {
		console.log("Parent");
	}

}

// класс ребенок от двух классов сразу
class Children extends mixinName(Parent) {

}



let children = new Children ();
children.parentMethod();
children.method();



// Map | WeakMap
// Set | WeakSet
 
// коллекция как объект

let objKey = {
	key: "value"
};
let funcKey = function() {};

let map = new Map();
map.set(objKey, "value1");
map.set(funcKey, "value2");

console.log(map);
map.get(objKey);

// коллекция с уник-ми значениями

let unColl = new Set ([7, 7, 9 , 8 ]);
console.log(unColl);
unColl.has(7); // проверяем
unColl.add(null); // добавляем
unColl.add( {id:5, login: "user" });

for (let elem of unColl) {
	console.log(elem);
}

unColl.forEach( (elem)=> {console.log(elem);
});


// тип данных Symbol

let symb = Symbol("faf");
console.log(symb);


let obj = {
	key: "value",
	[Symbol("symb")]: "symb val"
}

for (let key in obj) {
	console.log(key, obj[key]);
}

console.log(Object.getOwnPropertySymbols(obj));




