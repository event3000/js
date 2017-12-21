(function(){
"use strict";

//  EC5 PROTOTYPE
// СОЗДАЕМ ПОДОБИЕ КЛАССОВ (ЧЕРТЕЖ)

function Farm(name, human_name) {
    this.name = name;
    this.human = new Human(human_name)
};

function Human(name){
    this.name = name;
};


function AnimalHotel() {
    this.animals = [];
    this.max_count = 5;
};

// создаем метод у подобия класса через prototype
AnimalHotel.prototype.addAnimals = function (animal) {
    if (this.animals.length < this.max_count ) {
        this.animals.push(animal);
        console.log("кто живет в сарае:", this.animals);
    } else {
        console.log("нет мест в сарае");
    }
};

function Animal(name) {
    this.name = null;
    this.eat = null;
    this.name = name;
};

function DomAnimal(name){
    Animal.call(this, name);
    this.name = name;

};

// метод - назначаем еду животному
Animal.prototype.setEat = function (value) { 
    this.eat = value;
};

// наследование
DomAnimal.prototype = Object.create(Animal.prototype);




// СОЗДАЕМ ЭКЗЕМПЛЯРЫ ПО ЧЕРТЕЖУ

let farm = new Farm("Big ferm", "Fred");
 console.log(farm);

let hotel = new AnimalHotel() // создаем сарай

// создаем животных
let an1 = new DomAnimal("Кот");
an1.eat = "Кошачий корм";

let an2 = new Animal("Корова");
an2.eat = "Сено";

let an3 = new DomAnimal("Собака");
an3.eat = "Собачий корм";

let an4 = new Animal("Лошадь");
an4.eat = "Овес";

// прикрепляем животных к сараю
hotel.addAnimals(an1);
hotel.addAnimals(an2);
hotel.addAnimals(an3);
hotel.addAnimals(an4);









}() );