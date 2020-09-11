import { play } from './game'; 

document.addEventListener('DOMContentLoaded', () => {
    const [firstBall, secondBall, thirdBall] = Array.from(document.getElementsByClassName("balls"))[0].children; 
    const disableUserInput = document.getElementById("disable_user_input");
    const startGameModal = document.getElementById("start_game_modal"); 
    const startButton = document.getElementById("start_button"); 
    const secondsHtml = document.getElementById("seconds"); 
    let seconds; 
    let clicked = false; 
    
    const setCountDown = () => {
        if (clicked) return; 
        clicked = true; 

        const handleSeconds = () => {
            if (seconds === 1) {
                clearInterval(interval); 
                startGameModal.style.display = "none";
                play(firstBall, secondBall, thirdBall);  
            } else { 
                seconds -= 1; 
                secondsHtml.innerHTML = seconds;
            }
        }
        
        if (!seconds) seconds = 4; 
        let interval = setInterval(handleSeconds, 1000); 
    }
    
    startButton.onclick = setCountDown; 
}); 