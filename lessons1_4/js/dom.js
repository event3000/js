(function(){
'use strict';

//методы что бы что то найти

// let div = document.getElementById('div');
// console.log("1 ------- ",div);


// div.someValue = true ;

// id - sel - имя клас - самые основные

// метод поиск по тэгу (все эл в виде масс)

// let divs = document.getElementsByTagName('div');
// console.log("2 --------- ",divs);

// получение по селектору (классу)

// let selector = document.getElementsByClassName("other");
// console.log("3 ---------- ",selector);

// let q1 = document.querySelector("li a");

// let q2 = document.querySelectorAll("li a");

// возврат толькой детей и ничего более
// let divch = document.getElementById("div").children;
// console.log(divch);

//console.log(document);

// удаление э-та
// div.remove();

// проверка атриб-та
// div.hasAttribute("id");
// console.log(div.hasAttribute("id"));

// переопред-е атр та

// div.setAttribute("id", "dddddd");
// div.getAttribute("id");
// div.removeAttribute("id");


div.style.color = "red";

// div.classList.add("dada");
// div.classList.remove("dada");
// div.classList.toggle("dada");

// вставка в тег содержимое
div.innerHTML = "fffff zzzz";
// divs[1].innerHTML = div.innerHTML; // можно так

// создание эл-та

let elem = document.createElement("p");
elem.setAttribute("src", "");
div.appendChild(elem);



}() );