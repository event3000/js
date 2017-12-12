(function(){
'use strict';
// =============================================================
// Создать объект slider, в нем будут два метода:
// 1. init : получение элемента (по id), в который и будут вставляться слайды

// 2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
// Внутри объекта пользуйтесь this

 let slider = {
 	// получ-е элемента (по id), в который и будут вставляться слайды
 	init: function(id) {
 		this.el = document.getElementById(id); 
 	},

 	// add: добавление картинок в слайдер
 	add: function(url, alt) {
 		let img = document.createElement("img"); // создание эл-та img
 		img.setAttribute("src", url); // добавление к img -> атр-та src 
 		img.setAttribute("alt", alt); // добавление к img -> атр-та alt
 		this.el.appendChild(img); // навязывение детей img, объекту slider
 	},
 };	


// вызов функцийй
 slider.init("slider");
 slider.add("#", "alt1 txt");
 slider.add("#", "alt2 txt");
 slider.add("#", "alt3 txt");




}() );