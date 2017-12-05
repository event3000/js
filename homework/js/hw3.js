'use strict'; 


// =======================================================
// Задание ко вторнику (5.12.2017):
// 1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить. 
// Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)

function calc (input1,input2,operator) {

	// проверка на число
	if( typeof input1 !== "number" || typeof input2 !== "number" ){
		return "неправильный ввод данных, введите число";
	} 

	// действие в зависимости от оператора
	switch ( operator ) { 
	case "+":
		return input1 + input2;
		break;
	case "-":
		return input1 - input2;
		break;
	case "*":
		return input1 * input2;
		break;
	case "/":
		if (input2 === 0) {
			return "на ноль делить нельзя";
			break;
		} else {
			return input1 / input2;
			break;	
		}
	default:
		return "неправильный оператор";
	}
}

let res31 = calc (150,50,"/");
console.log("ЗАДАЧА 3-1:", res31);



// =======================================================
// 2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.


var n = 223;
function recs (n) {
	// в процессе

}	

let res32 = recs (n);
console.log("ЗАДАЧА 3-2:", res32);











// =======================================================
// 3. (на замыкание)
// Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.







