(function(){
'use strict';

// ====================================================
// 1. События клавиатуры keydown, keyup, keypress
// Написать функцию обработчик события так, чтобы вводимая пользователем инфоромация сразу же отображалась в textarea или любом другом месте


// захват эл-тов по id
let fl1 = document.getElementById("field1");
let fl2 = document.getElementById("field2");

fl1.addEventListener("keyup", add); // на 1е поле вешаем обработчик

// создаем функцию, которая к 2му эл-ту добавляет атрибут со значением  от 1го поля
function add(event) {
	fl2.setAttribute("value", fl1.value); 
}	

// ====================================================
// 2. Написать по одной любой функции-обработчику на следующие события:
// DOMContentLoaded
// beforeunload
// onload на отдельный элемент

document.addEventListener("DOMContentLoaded", domCont);

function domCont(event) {
    console.log("DOMContentLoaded:", "браузер полностью загрузил HTML и построил DOM-дерево");
};



window.addEventListener("beforeunload", onbF);
	
function onbF(event) {
	event.preventDefault();
	event.returnValue = "Вы точно хотите покуинуть страницу?";
	return event.returnValue;	
};



let div = document.getElementById("onload");
div.onload = onLoad;

function onLoad() {
	console.log("onload");
};


















}() );

