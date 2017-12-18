(function(){
'use strict';
console.log("==================== OOP прототипный стиль");

let animals = { // созд объект
	run: function(){
	console.log("Run");	
	},
	eat: function(){
	console.log("Eat");	
	},
	name: "animal",
}

let domastic = {
	sleep: function() {
		console.log("Sleep");
	}
}



domastic.__proto__ = animals; // animal это прототип для domastic 
// либо domastic прототипно наследуется от animal
// __proto__ как ссылка
domastic.run();

console.log(domastic);

// проверка св-ва объекта
//objName.hasOwnProperty(property: string)

// вывести все св-ва domastic 
for (let key in domastic) {
	if (domastic.hasOwnProperty(key)) {
		console.log("принадлежит", key);
	} else {
		console.log("не пренадл", key);
	}
};

//animals.toString();
animals = Object.create(null); // созд-е объекта без свойств/методов
console.log(animals);

console.log("==================== OOP прототипный стиль - создание классов");


// созд-ие классов
// 1 создаем фун-ю констр-р со свойствами
// 2 нужные методы - в prototype
// здесь все св-ва публичные

function Car(price) { // созд класс
	this.price = price;
	// let color = "red";
}

Car.prototype.move = function () {
	console.log("move");
}

Car.prototype.changeColor = function (new_color) {
	this.color = new_color;
	console.log(this);
}


let car = new Car(5000);
car.move();
car.changeColor("red1");

console.log(car);

// this._color  - условно приватный метод 

console.log(" =======      Наследование (в прототипном стиле)");
// Наследование (в прототипном стиле)

function LittleCar () {

}



// let car = new Car(7000);

// console.log(car);
// насл-ие


LittleCar.prototype = Object.create(Car);
console.log(new LittleCar());

LittleCar.prototype.sale = function () {
	console.log("sale");
}

let littleCar = new LittleCar("fafaf");
console.log(littleCar);



}() ); // закр обекртки

console.log(" =======      Классы (в прототипном стиле)");



class ClassName {
						 // созд класс и описываем все св-ва
	constructor(name) { // вызывается в момент соз-я оьъекта
		this.name = name; // созд св-ва
		this.val = null;
	}


	// описание методов
	showInfo() {
		console.log("showInfo", this);
	}

	//сеттер
	set setGetVal(val) {
		this.val = val;
	}

	//геттер 
	get setGetVal() {
		return this.val;
	}

	// static метод - что бы вызвать метод не созд-я объект
	// вызов ClassName.staticMethodName();
	static staticMethodName(val){
		console.log(val + 100); // c this не работает 
	}


}

let obj = new ClassName("obj name"); // клаас отрабат-ся в момент создания объекта

obj.showInfo();
console.log(obj);

let x = obj.setGetVal = "346";
console.log(x); // сеттер

console.log(obj.setGetVal); // геттер

ClassName.staticMethodName(150);



// создаем доченрний класс к родительскому ClassName

class SomeClass extends ClassName {
	constructor () {
		super(); // вызов констр-ра родит-го класса, нужен для контекста
		this.id = 9;
	}

}

let someClass = new SomeClass("someClass");
console.log(someClass);

