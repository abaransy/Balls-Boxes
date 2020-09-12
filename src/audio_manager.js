document.addEventListener("DOMContentLoaded", () => {
    let player = document.getElementById("player");
    let togglePlayerButton = document.getElementById('toggle_player'); 
    var isPlaying = false;
    
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
