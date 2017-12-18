(function(){
'use strict';



// console.log("==================== OOP");

// // думаем о сущностях и как они будут взаи-ть

// // сначало пишем план - выделяем отдельные  классы с  сущностями (объекты)

// // методы публичные (мало жел-но) и приватные

// // 1 ООП в функц стиле
// // 2 ООП в прототипном стиле


// console.log(" =============  // 1 ООП в функц стиле");


// //созд класс но тк их нет то объект (абстрактный)

// function ClassName (name) { 

///////////////////////
// инкапсуляция
	// var name;

	// this.setName
	// this.getName
///////////////////////////


// ПРИВАТНОСТЬ И ПУБЛИЧНОСТЬ
	// this.name = name;

	// // св-ва
	// let propertyName; // приватное св-во
	// this.publickProperty; // публичное св-во

	// //методы
	// function methodName(){ // прив-ый метод

	// };
	// this.methodName = function () {	// публ-ый метод
	// }; 


	// this.doMove = function() {

	// }

// }


// let player1 = new Player("Player Name"); // реал-ция конкр игрока
// player1.doMove();

// let player2 = new Player("Player Name"); // реал-ция конкр игрока
// player2.doMove();

console.log(" =============  // 1 ООП в функц стиле ферма");

/////  ЧАСТЬ ПРОГРАММЫ 1

function Farm(name, human_name) { // функц-я конст-р абстрактный класс
	this.name = name; // public
	this.human = new Human(human_name);
}

function Human(name) {
	this.name = name; // public (объект може ими польз)

}

function AnimalHotel(name) {
//	this.name = name; // public
	this.animals =  [];
	this.max_count = 3;
	this.addAnimals = function(animal){
		if (this.animals.length < this.max_count) {
			this.animals.push(animal);
			console.log(this.animals);
		} else {
			console.log("Извините, нет свободных мест");
		}
	};
}

function Animal() { // все животные класс
	this.name = null;
}

function DomasticAnimal(name) { // дом животные
	Animal.call(this); // наследование от класса Аnimal
	this.name = name;

	
}


/////  ЧАСТЬ ПРОГРАММЫ 2

// объект
let farm = new Farm("Ферма", "Human");
console.log(farm);

let cat = new DomasticAnimal("Кошка");
console.log(cat);

let animalHotel = new AnimalHotel(); // объект сарай

animalHotel.addAnimals(cat);



let donkey =  new DomasticAnimal("Осел");
animalHotel.addAnimals(donkey);

console.log(animalHotel);

















}() );