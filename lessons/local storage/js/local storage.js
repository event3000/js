(function(){
"use strict";

// LS объект для сохранения данных в браузере 5mb

let storage = localStorage;
console.log(storage);

// добавление значения
storage.setItem("key","value");

// получить значение по ключу
let valStorage = storage.getItem("key");
console.log(valStorage);

// удаление по ключу
storage.removeItem("key");
console.log(storage);

//очистить хранилище полностью
storage.clear();

// если valur объект
let somObj = {
	id:3,
	login: "fafaf"
};

let someObjJson = JSON.stringify(somObj);
storage.setItem("somObj", someObjJson );
console.log(storage);

let objFormStorage = JSON.parse( storage.getItem("someObj") );
console.log(objFormStorage);

// ошибка при нехватке места
// 22 или QUOTTA_EX.._ERR

try {
	storage.setItem("some_key", "some_value");
} catch (err) {
	if(err === 22) { // QU...
		console.log("мало места");
	}
}


}() );