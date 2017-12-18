(function(){
'use strict';

// В js файле создать объект handlers со следующими методами:
// startDraw
// endDraw
// drawing
// erase

// на canvas повесить следующие обработчики:
// 'mousedown' - метод handlers - startDraw
// 'mouseup'- метод handlers - endDraw
// 'mouseout' - метод handlers - endDraw
// 'mousemove'- метод handlers - drawing



let canvas = document.getElementsByTagName("canvas")[0];
let erase = document.getElementById("paint_eraser");  

let handlers = {};

handlers.startDraw = function() {
	console.log("Начало рисования");
	this.isDrawing = true;
};	

handlers.endDraw = function() {
	console.log("Рис-е окончено");
	this.isDrawing = false;
};

handlers.drawing = function() {
	if (this.isDrawing) {
		console.log("В процессе рисования");
		let context = canvas.getContext("2d");
		context.beginPath();
		context.fillStyle = document.getElementById("paint_brush_color").value;
		context.arc(event.offsetX, event.offsetY, document.getElementById("paint_brush_size").value,0,Math.PI*2, false); 
		context.fill(); 

	} else {
		return;
	}
};

handlers.erase = function () {
	console.log("ластик - стирание");
    var context = canvas.getContext("2d");
		context.beginPath();
		context.fillStyle = document.getElementById("paint_brush_color").value = "#ffffff";
		context.arc(event.offsetX, event.offsetY, document.getElementById("paint_brush_size").value,0,Math.PI*2, false);
		context.fill();
    
};


canvas.addEventListener("mousedown", handlers.startDraw);
canvas.addEventListener("mousemove", handlers.drawing);
canvas.addEventListener("mouseup", handlers.endDraw);
canvas.addEventListener("mouseout", handlers.endDraw);
erase.addEventListener("click", handlers.erase);

	
	
// elem.getBoundingClientRect();
// {
// 	"top": 
// 	"bottom"
// }





}() );