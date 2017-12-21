(function(){
"use strict";

//  EC6 КЛАССЫ
// СОЗДАЕМ КЛАССЫ (ЧЕРТЕЖ)


class Farm {
    constructor (name, human_name) {
        this.name = name;
        this.human = new Human(human_name)
    }
}

class Human {
    constructor (name){
        this.name = name;
    }
}


class AnimalHotel {
    constructor() {
        this.animals = [];
        this.max_count = 5;
    }    

    addAnimals (animal) {
            if (this.animals.length < this.max_count ) {
                this.animals.push(animal);
                console.log("кто живет в сарае:", this.animals);
            } else {
                console.log("нет мест в сарае");
            }
    }
}


class Animal {
    constructor(name) {
        this.name = null;
        this.eat = null;
        this.name = name;
        
    }

    get givEat(){  // геттер - запрос какая еда у животного
        return this.eat;
     }

    set givEat(eat){ // сеттер - назначаем еду животному
        this.eat = eat;
    }

}


class DomAnimal extends Animal { // связывает доч эл-т как extends указ-ем родит-ий эл-т Animal
    constructor(name) {
        super(name); // у дочернего класса должен быть super + аргумент
       
    }
}


// СОЗДАЕМ ЭКЗЕМПЛЯРЫ ПО ЧЕРТЕЖУ
let farm = new Farm("Big ferm ES6", "Fred");
 console.log(farm);

let hotel = new AnimalHotel() // создаем сарай

// создаем животных
let an1 = new DomAnimal("Кот");
an1.givEat = "Кошачий корм";

let an2 = new Animal("Корова");
an2.givEat = "Сено";

let an3 = new DomAnimal("Собака");
an3.givEat = "Собачий корм";

let an4 = new Animal("Лошадь");
an4.givEat = "Овес";

// прикрепляем животных к сараю
hotel.addAnimals(an1);
hotel.addAnimals(an2);
hotel.addAnimals(an3);
hotel.addAnimals(an4);


}() );