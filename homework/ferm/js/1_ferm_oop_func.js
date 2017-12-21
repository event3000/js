(function(){
"use strict";

// СОЗДАЕМ ПОДОБИЕ КЛАССОВ ЧЕРЕЗ ФУНЦИЮ КОНСТРУКТОР (ЧЕРТЕЖ)
function Farm(name, human_name) {
    this.name = name;
    this.human = new Human(human_name)
}

function Human(name)
 {
    this.name = name;
}

function AnimalHotel() {
    this.animals = [];
    this.max_count = 2;
    this.addAnimals = function(animal) {
        if (this.animals.length < this.max_count ) {
            this.animals.push(animal);
            console.log("кто живет в сарае:", this.animals);
        } else {
            console.log("нет мест в сарае:");
        }
    };
}


function Animal(name) {
    this.name = null;
}

function DomAnimal(name) {
    Animal.call(this);
    this.name = name;
}


// СОЗДАЕМ ЭКЗЕМПЛЯРЫ ПО ЧЕРТЕЖУ
let farm = new Farm("Big ferm", "Fred");
 console.log(farm);

let an1 = new DomAnimal("Кот");
let an2 = new DomAnimal("Корова");
let an3 = new DomAnimal("Собака");



let hotel = new AnimalHotel()

hotel.addAnimals(an1);
hotel.addAnimals(an2);


console.log(hotel);




//    function NewClass() {
//        
//    }
//    
//    var newClass = new NewClass();
    
    // set get
    // this.setColor = function(color) {
        
    // }
    
    // this.getColor = function() {
        
    // }




}() );