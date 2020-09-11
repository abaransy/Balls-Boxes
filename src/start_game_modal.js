import { play } from './game'; 

document.addEventListener('DOMContentLoaded', () => {
    const gameState = document.getElementsByClassName('game_state')[0]; 
    gameState.style.visibility = "hidden"; 
    const startButton = document.getElementById("start_button"); 
    const secondsHtml = document.getElementById("seconds"); 

    let clicked = false; 
    
    
    startButton.onclick = () => setCountDown(secondsHtml, clicked); 
}); 

export const setCountDown = (secondsHtml, clicked, modal, startButton) => {
    if (modal)  {
        modal.style.visibility = "visible"; 
        modal.style.opacity = "1"; 
        startButton.style.visibility = "hidden"; 
        secondsHtml.style.visibility = "visible"; 
        secondsHtml.innerHTML = "";
    }

    // console.log(secondsHtml); 
    let seconds; 
    if (clicked) return; 
    clicked = true; 

    const handleSeconds = () => {
        if (seconds === 1) {
            clearInterval(interval); 
            play();  
        } else { 
            seconds -= 1; 
            secondsHtml.innerHTML = seconds;
        }
    }
    
    if (!seconds) seconds = 4; 
    let interval = setInterval(handleSeconds, 1000); 
}