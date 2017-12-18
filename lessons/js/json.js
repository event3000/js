(function(){
'use strict';

// JSON формат - текст формат обмена данными  - 
// отправка данных на сервер удобно

// МОЖНО ПЕРЕДАВАТЬ
// объекты
// массивы
// строки в ""
//числа
// tr/false
// null

//методы - 

// JSON.parse - чтение  из JSON в обыч строки 
// JSON.stringify - преобр-ние в JSON строку

// '{"name": "Ivan"}'

// {
// 	name: 'Ivan'
// }

// 


// 1 ВАРИАНТ ))) JSON.parse -- > из JSON в обыч строку (когда нам что то пришло надо распарсить)
var jsonStr = '{"name": "Ivan", "zzz": "Fred"}'; // можно массивы и т д
var res = JSON.parse(jsonStr); 
console.log(res);

// вар с вторым аргументом reviver
var jsonStr = '{"name": "Ivan", "login": "user"}'; // можно массивы и т д
var obj = JSON.parse(jsonStr, 
	function (key, value) {
		if (key === "login") {
			return "new login";
		} else {
			return value;
		}
	}

	); 

console.log(obj);

// 2 ВАРИАНТ JSON.stringify - преобр-ние в JSON строку

let data = {
	name: "Georg"
};

data = 4;
data = true;
data = "Str";
data =  [45, 33, 12];

let jsonRes1 = JSON.stringify(data);
console.log(jsonRes1);

// c 2 арг (мб массивом и функцией)
// если массив
data = {
	name: "Fred",
	login: "User"
}

let jsonRes2 = JSON.stringify(data, ["login", "name"]);
console.log(jsonRes2);


// если ф-ция 2 арг

data = {
	name: "Fred",
	login: "User"
}

let jsonRes3 = JSON.stringify(data, 
	function (key, value) {
		if (key === "login") {
			return "new login";
		} else {
			return value;
		}
	}

	);
console.log(jsonRes3);

// если ф-ция + 3 арг space

data = {
	name: "Fred",
	login: "User"
}

let jsonRes4 = JSON.stringify(data, 
	function (key, value) {
		if (key === "login") {
			return "new login";
		} else {
			return value;
		}
	}, "space ");
console.log(jsonRes4);


console.log("///////////////////////////////// --");



}() );