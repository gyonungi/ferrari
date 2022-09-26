
// lvl

const startButton = document.getElementById("startbutton");
const input = document.querySelector("input");

const LevelOne = document.querySelector('.choise1:checked');
const LevelTwo = document.querySelector('.choise2:checked');
const LevelThree = document.querySelector('.choise3:checked');

startButton.onclick = function(){
    let checkedRadio = document.querySelector('input[type="radio"]:checked').value;
		if (LevelOne.value = 1) {
        window.location.href = "/game.html"
    }else{
        console.log('ошибка');
    }

    }

