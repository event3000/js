// GAME LESSON - CONTROLLER
"use strict";

class FieldController{
    constructor (){
    //	this.canvContext = null;
     this.fieldModel = new FieldModel();
    }

    initCanvasContext(canvas_id, context) {
    	this.canvas = document.getElementById(canvas_id);
    	this.canvContext = this.canvas.getContext(context);
    }

    generate() { // генерация поля
    	let img = document.getElementsByTagName("img")[0];
    	this.canvas.height = "642";
    	this.canvas.width = "642";
    	this.canvContext.drawImage(img, 0, 0); // коордты изобр-я в канвасе
    }

    getStart() {
    	this.start = [12,0];
    	this.fieldModel.start(this.start_coord);
    }



}

// создание экземпляров 

let field = new FieldController();
field.initCanvasContext("game_field", "2d");
field.generate();





/////////// СХЕМА (mvc / объекты / методы)

// --- VIEW
// html

// --- CONTROLLER (св звено Model и Вью отображение )
// html

// field
// - отрис канваса

// human

// status (очки справа)
// timer 
// bonus (плюшки - генерация и подсчет в model)

// методы 
// - rule  (мод окна)
// - begin
// - end

// --- MODEL (расчет и логика)
// field

// human

// status (очки справа)

// game (timer /bonus / rule)










