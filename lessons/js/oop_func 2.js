//OOP FUNC PROTO 2 // разница функ и прот стиле только в хранении

function FuncObjParent() {
	this.name = "FuncObjParent";

	this.parentFunc = function() {
		console.log("parent  ");
	}
}

function ProtoObjParent() {
	this.name = "Proto ..";
}

ProtoObjParent.prototype.parentFunc = function() {
	console.log("parent");
}

// доч функц конст
function FuncObj() { // созд ф-ю констр в функ стиле
		FuncObjParent.call(this); // наследование
		this.show = function () {
			console.log("fsfa");
		}
}


function ProtoObj () { // созд ф-ю констр в прот стиле (класс)

}

ProtoObj.prototype = Object.create(ProtoObjParent.prototype);


// созд объекты
var funcObj = new FuncObj();
var protoObj = new ProtoObj();




// funcObj.show = function () { //  можно внутр ф-ции
// 	console.log("show funOb");
// }


ProtoObj.prototype.show = function(){
	console.log("show Prot Obj");
}

console.log(funcObj);
console.log(protoObj);

funcObj.parentFunc();


funcObj.show();
protoObj.show();
