//Timer

const minut = document.querySelector('.minut');
const second = document.querySelector('.second');

const startOver= document.querySelector('.button-start');

document.addEventListener('DOMContentLoaded',function(){
    clearInterval(interval);
    interval = setInterval(startTimer,1000)
});
let min = 00;
let sek = 00;
millsek = 00;
let interval;

function startTimer(){
    sek++
    if(sek < 60){ 
        second.innerText = "" + sek
    }
 
    if(sek > 60){
        min++
        minut.innerText = "0" + min
        sek = 0
        second.innerText = "0" + sek
    }
}

// Flip Card

document.querySelector(".photo-Card").addEventListener('click',() =>{
    document.querySelector(".photo-Card").classList.add('flip');


});