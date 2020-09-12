document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const togglePlayerButton = document.getElementById('toggle_player'); 
    let isPlaying = false;
    
    const togglePlay = () => {
        isPlaying ? player.pause() : player.play();
    };
    
    player.onplaying = () => {
        isPlaying = true;
    };
    
    player.onpause = () => {
        isPlaying = false;
    };
    
    togglePlayerButton.addEventListener('click', togglePlay); 
})
