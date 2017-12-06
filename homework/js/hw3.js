'use strict'; 


// =======================================================
// Задание ко вторнику (5.12.2017):
// 1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить. 
// Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)
console.log("ЗАДАЧА 3-1:");
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
console.log(res31);



// =======================================================
// 2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.

console.log("ЗАДАЧА 3-2: рекурсия");


function recs(n) {
	
	if ( n > 10 ) {
        let b = (n - n%10) / 10;          
        return n%10 + recs(b);

    } else {
        return n;
    }   
}

console.log(recs(933));


// =======================================================
// 3. (на замыкание)
// Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.




console.log("ЗАДАЧА 3-3 функция которая возвращает новую функцию:");

function carr1(a) {
	return function(b) { 		
		return a + b;
    };
}
 
let carr2 = carr1(50);
console.log(carr2(10)); 
console.log(carr2(-10));

