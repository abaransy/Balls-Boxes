import play from './game'; 

document.addEventListener('DOMContentLoaded', () => {
    const startGameModal = document.getElementById("start_game_modal"); 
    const startButton = document.getElementById("start_button"); 
    const secondsHtml = document.getElementById("seconds"); 
    let seconds; 
    
    const setCountDown = () => {
        const handleSeconds = () => {
            if (seconds === 1) {
                clearInterval(interval); 
                startGameModal.style.display = "none";
                play();  
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