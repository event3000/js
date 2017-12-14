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

// Проверьте, чтобы методы действительно отрабатывали. Во вторник будем делать из этого мини paint. Но можете попробовать реализовать его сами до вторника (надо будет почитать про рисование canvas)

let canvas = document.getElementsByTagName("canvas")[0];

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
//		context.fillStyle // заливка
		context.strokeStyle = document.getElementById("paint_brush_color").value;
		context.arc(event.offsetX, event.offsetY, document.getElementById("paint_brush_size").value,0,Math.PI*2, false); 
		context.stroke(); 
		//context.fill(); 



	} else {
		return;
	}
};

canvas.addEventListener("mousedown", handlers.startDraw);
canvas.addEventListener("mousemove", handlers.drawing);
canvas.addEventListener("mouseup", handlers.endDraw);
canvas.addEventListener("mouseout", handlers.endDraw);

	
	
// elem.getBoundingClientRect();
// {
// 	"top": 
// 	"bottom"
// }





}() );