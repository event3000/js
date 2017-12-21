// ИГРА КРЕСТИКИ НОЛИКИ (ДЗ)
(function() {
    "use strict";


// КЛАСС логическая часть
class Player{
    constructor(name, symb) {
        this.name = name; //имя
        this.symb = symb; //крест или нолик
    }
}

// КЛАСС game
class Game{
    constructor() {
        this.start = start; //когда все данные собраны
        this.finish = finish;
        this.round = round; // какой сейчвс раунд
    }
}

// КЛАСС контроллер
class GameTable{
    constructor() {
       this.name = name; //имя
    }

    getuserInfo(){  // метод сбор инфы перед. в нов метод - отпр в Pl.Name и созд игроков  
    }

    updateField(n) { // обновление поля
        for (var i=0; i< n; i++) { // добавление ячеек в цикле
            document.getElementById("field-all").innerHTML+='<div class="field-item"></div>';
        }
    } 
}


let pl1 = new Player("Ivan", "X");
console.log(pl1);

let pl2 = new Player("Fred", "O");
console.log(pl2);

let field = new GameTable(); 
field.updateField(9); // отрисовка поля






    








}());