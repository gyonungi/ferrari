
// lvl

const startButton = document.querySelector(".startbutton");
const input = document.querySelector("input");




startButton.addEventListener('click',function(){
    let checkedRadio = document.querySelector('input[type="radio"]:checked');
    	console.log(checkedRadio);
		if (checkedRadio) {
           		 window.gameState.level = checkedRadio.value;
       		 	 window.location.href = "/game.html"
    }else{
        alert('Выберите уровень сложности');
    }
    
    })

  
