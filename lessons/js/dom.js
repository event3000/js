(function(){
'use strict';

// ОСН ================   метод по id (верн div c #one)
let one = document.getElementById('one');
console.log(one);

// ОСН =============== метод по селектору/классу (верн div c класc three)
let sel = document.getElementsByClassName("three");
console.log(sel);


// ОСН =============== метод по тэгу (верн все div)
let mass = document.getElementsByTagName('div');
console.log(mass);



//возвращает первый элемент по селектору
let q1 = document.querySelector("li");
console.log(q1);

//возвращает все элементы по селектору (в массив)
let q2 = document.querySelectorAll("li");
console.log(q2);


// возврат толькой детей
let ch = document.getElementById("one").children;
console.log(ch);


// удаление э-та, пишем id эл-та
//zz.remove();

//проверка атриб-та (по id = "one"  )
let att = one.hasAttribute("style");
console.log(att);

// переопред-е значения  атрибута на NOT
one.setAttribute("style", "not");


// получение знач-я аттр-та style
let get = one.getAttribute("style");
console.log(get);


// удаление атрибута style
one.removeAttribute("style");



// id эл-та задаем цвет
one.style.color = "red";
zag.style.backgroundColor = "green";

// id -- добавл класс эл-ту class="demo"
one.classList.add("demo");


// id -- удал класс эл-ту class="demo"
one.classList.remove("rem");

//id --- Если класс у элемента отсутствует - добавляет, иначе - убирает
one.classList.add("addtoog");

// id вставка в тег содержимое все
zz.innerHTML = "fffff zzzz";
// divs[1].innerHTML = div.innerHTML; // можно так

// создание эл-та
let elem = document.createElement("div");
elem.innerHTML = "<h1>Привет!</h1>"
elem.setAttribute("src", "");


// формы

// for (var key in window) {
// 	console.log(key, window[key]);
// }

// родитель для формы
let formContainer = document.getElementById('form');

// форма
let form = document.createElement('form');
form.setAttribute("id", "form_id");
form.setAttribute("action", "#"); 
form.setAttribute("method", "post");  

//input 1
let input1 = document.createElement('input');
input1.setAttribute("type", "text");
input1.setAttribute("required", true);
input1.setAttribute("id", "input_id");

//input 2
let input2 = document.createElement('input');
input2.setAttribute("type", "text");
input2.setAttribute("required", true);

//checkbox

let check = document.createElement("input");
check.setAttribute("type", "checkbox");
check.checked = true;

let btn = document.createElement('button');
btn.setAttribute("value", "btn");


// доб в код формы
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(check);
form.appendChild(btn);

// добавление формы в   html
formContainer.appendChild(form);

let input_val = document.getElementById("input_id").value;
// document.getElementById("input_id").checked;
console.log("знач по наж на кнопку:",input_val);




//click
//contextmenu
//dbclick
//mousedown
//mouseup
//mouseover
//mouseout
//mousemove

// События
let cl = document.getElementById("clid");
cl.addEventListener("click", showCl );

function showCl() {
console.log("Функция по клику", cl); // или  this
};


//удал-е обработчика-ка
//cl.removeEventListener("click", showCl );


// переназначение 2й клик
// click.addEventListener("dbclick", dbshowCl );

// function dbshowCl() {
// 	console.log("Функция по клику", this);
// };

// получение value из инпута по клку на DIV c id=zz1
function showCl() {
console.log( document.getElementById("zz1").value );
}





// передает данные о перем-нии мыши в на странице
document.body.addEventListener("mousemove", showCoord);

function showCoord(event) {
	console.log("Координаты мыши:",event);

};


// передает данные о перем-нии мыши в на странице в опр блоке
// document.getElementById("mousemove").addEventListener("mousemove", showCoordmouse);

//дописать
// function showCoordmouse(event) {

//  	console.log("Координаты мыши:",event);
// };







}() );