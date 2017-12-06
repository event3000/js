// ОБЪЕКТЫ

(function() {
	'use strict'; 

// объекты как асс-ые массивы
// имена св-в задаем сами
var obj = {};

var user = {};

user.login = "user1"; // созд сво-во login со знач user1

 

// console.log(user.login); //  получ данные св-ва

// delete user.login; // удаление св-ва

//есть ли св-во в объекте
if ("login" in user) {
	console.log(user.login);
}


// обращение к св-ву через 
console.log(user.login); // станд вар-т
console.log(user['login']);

//  можно обратиться так через переменную
var a = "login";
console.log(user[a]);

/// !!! литеральный способ созд объекта

user = {
		login: "vasya",
		email: "afafaf@mail.ru",
		other: 12,		

};


// var size = 9;
// var otherSize = size;
// var otherSize = 52525;
// // хранение по значению
// console.log(size, otherSize);


// var horse = {
// 		size: "big",

// };

// var pony = horse;

// Если кладем переменн - это св-во если функцию то это метод

user = {
		login: "vasya",
		func: function() {
		console.log(this);
		console.log(this.login);
		console.log(user.login);  //  то же самое
		},
		changeName: function(new_name) {
			this.login = new_name;
			console.log(this.login);
		},
};


console.log(user);

// this как обращение к методу объекта

}());


 




