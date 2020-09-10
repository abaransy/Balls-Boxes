const startGameModal = document.getElementById("game_start_modal"); 
const startButton = document.getElementById("start_button"); 
const secondsHtml = document.getElementById("seconds"); 
const seconds = 0; 

const setCountDown = () => {
    const handleSeconds = () => {
        if (seconds === 0) {
            clearInterval(interval); 
            startGameModal.style.display = "none"; 
        } else { 
            seconds -= 1; 
            secondsHtml.innerHTML = seconds;
        }
    }

    let interval = setInterval(handleSeconds, 1000); 
}

startButton.onclick = setCountDown; 