(function() {
"use strict";

    
    let fl1 = document.getElementById("player1");
    let fl2 = document.getElementById("player2");
    

    fl1.addEventListener("keyup", add);


    function add(event) {
        fl2.setAttribute("value", fl1.value);
    }

 

    reset = document.getElementById("reset-game"), 
    message = document.getElementById("message"), 
    player = "X", // первый игрок
    stepCount = 0, // счетчик шагов
        
        winCombinations = [ // массив с выигрышными комбинациями
            [1, 2, 3],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 6, 9],
            [3, 5, 7],
            [4, 5, 6],
            [7, 8, 9]
        ],

        dataX = [], //запись значения при клике X
        dataO = []; //запись значения при клике O

        console.log( ceil);
    for (var i = 0; i < ceil.length; i++) {  
        ceil[i].addEventListener("click", currentStep);
    }


    // шаг
    function currentStep() {
        var num = +this.getAttribute("data-ceil"); // записывает значение атриб data-ceil когда кликнули - т.е. 1 2 3 и тд
        
        if (!this.textContent) { // если здесь нет никакого текст содержания
            this.innerText = player;
            player === "X" ?
                dataX.push(num) && this.classList.add("x") :
                dataO.push(num) && this.classList.add("o");
            if (
                (dataO.length > 2 || dataX.length > 2) &&
                (checkWin(dataO, num) || checkWin(dataX, num))
            ) {
                for (var i = 0; i < ceil.length; i++) {
                    ceil[i].removeEventListener("click", currentStep);
                }
                return (message.innerText = "Победил игрок " + player);
            }
            changePlayer();
            stepCount++;
            stepCount === 9 ?
                (message.innerText = "Ничья") :
                (message.innerText = "Ходит игрок " + player);
        }
    }

    // смена игрока 
    function changePlayer() {
        player === "X" ? (player = "O") : (player = "X");
    }


    // reset сброс 
    reset.addEventListener("click", function() {
        for (var i = 0; i < ceil.length; i++) {
            ceil[i].innerText = "";
        }

        dataO = [];
        dataX = [];
        player = "O";
        stepCount = 0;
        message.innerText = "Ходит игрок " + player;
        for (var i = 0; i < ceil.length; i++) {
            ceil[i].addEventListener("click", currentStep);
            ceil[i].classList.remove("x", "o");
        }
    });

    // проверка победившего
    function checkWin(arr, number) {
        for (var w = 0, wLen = winCombinations.length; w < wLen; w++) {
            var someWinArr = winCombinations[w],
                count = 0;
            if (someWinArr.indexOf(number) !== -1) {
                for (var k = 0, kLen = someWinArr.length; k < kLen; k++) {
                    if (arr.indexOf(someWinArr[k]) !== -1) {
                        count++;
                        if (count === 3) {
                            return true;
                        }
                    }
                }
                count = 0;
            }
        }
    }


}());