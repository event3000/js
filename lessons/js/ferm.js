
// класс ферма
function Farm(name, human_name) { // функция - конструктор
    this.name = name;  // publick     
    this.human = new Human(human_name);
}



// класс человек
function Human(name) {
    this.name = name;    
}

// класс сарай
function AnimalsHotel() {
    this.animals = [];
    this.max_count = 3;
    this.addAnimals = function(animal) {
        if (this.animals.length < this.max_count) {
                this.animals.push(animal);
                console.log(this.animals);
            } else {
                console.log("Нет свободных мест");
            }
    }
}

// класс животных общий
function Animal() {
    this.name = null;
}

// класс дом животных
function DomasticAnimal(name){
    Animal.call(this); // наследование
    this.name = name;   
        
//    function NewClass() {
//        
//    }
//    
//    var newClass = new NewClass();
    
    // set get
    this.setColor = function(color) {
        
    }
    
    this.getColor = function() {
        
    }

}
// ЭКЗЕМПЛЯРЫ

var farm = new Farm("Ферма", "Human");
console.log(farm);

var cat = new DomasticAnimal("Кошка");
console.log("Кошка", cat);

var animalHotel = new AnimalsHotel();

animalHotel.addAnimals(cat);

var donkey = new DomasticAnimal("Ослик");
animalHotel.addAnimals(donkey);
console.log("animalHotel", animalHotel);








