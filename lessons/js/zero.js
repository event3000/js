function GameTable {
	this.getUserInfo = function(){

	}

}


let gameTable = new GameTable();

document.getElementById("id").addEventListener("click", gameTable.getUserInfo);

var sell1  = document.createElement("div");
var sell2  = document.createElement("div");
var sell3  = document.createElement("div");

for (var i = 0; i < cells; i++) {
	var sell = document.createElement("div");
	sell.classList.add("");
	document.getElementById("field").appendChild(sell);
}

document.getElementById("start_game").addEventListener("click", getUserData);

getUderData() {
	var user_name= document.getElementById("user_name").value;
}

var fiels_size = document.getElementById("cheked").value;

// получаем field size 3 или 9



// Game (класс лог часть )
// start (когда все данн собраны tr fls)
// finish
// xz round (какой сейч раунд)
// xz finround


//Player (лог часть)
// name
// symb (крестик или нолик)
// xz state
//

 //GameTable (класс контроллер - отрис поле)
 // getuserInfo [] (метод сбор инфы) передав в нов метод - отпр в Pl.Name и созд игроков
 // updateField (обновление поля)


//метод кто ходит первым - даем опр - символ

