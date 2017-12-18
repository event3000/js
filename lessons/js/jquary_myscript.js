

console.log("================  JQUERY ");

jQuery(document).ready(function() {


// jquery библиотека для упрощения работы jquery.com
// либо качать либо тянуть с сайта
// сначало библ-ку подкл потом свой скрипт



// Исполь-ние
//$
// jQuery (правильнее)

// jQuery(elem)
	// .method() // c арг уст значение - без арг-та наоборот
	// .method();

	 // $("#elem_id")
	 // $(".class-name")
	 // $("p, ul")

	 // let div = document.getElementById("elem_id");
     // или так одно и тоже 
	 // $("#elem_id") 



// class Creator {}	

console.log("====================== AJAX");
// подг люб контент
// загруж из скрипта в скрип
// без перез


// $.ajax({
// 	url: "tst.js", // url
// 	data: {key: val}, // данные для передачи
// 	type: "POST", 
// 	success: function(data){ // в случае успеха функция

// 	},
// 	error: function(data) { // в случае ошибки функция

// 	},
// 	async: true, // при false все синхронно если тру асинхронно
// 	beforeSend: function () { } , // перед отпр-кой что то произойдет
// 	dataType: "xml, json, html" ,// то что мы хотим получить - формат 
// });

// document.getElementById("ajax").addEventListener("click"), function() {
// 	$.ajax({
// 		url: "tst.js", // url
// 		cach: false,
// 		success: function (html){
// 			console.log(html);
// 		},


// 	});

// }


// подкл файла отдельного в главн стр-цу
$("#ajax").load("tst.html", function () {
 //
	}
);





});