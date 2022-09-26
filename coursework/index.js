
// lvl

const startButton = document.querySelector(".startbutton");
const input = document.querySelector("input");




startButton.addEventListener('click',function(){
    let checkedRadio = document.querySelector('input[type="radio"]:checked');
    console.log(checkedRadio);
		if (checkedRadio) {
            window.gameState.leve = checkedRadio.level;
        window.location.href = "/game.html"
    }else{
        console.log('Выберите уровень сложности');
    }
     checkedRadio = document.querySelector('input[type="radio"]:checked').value;
    })

    window.gameState = {
        level: 1,
        level: 2,
        level: 3
    }