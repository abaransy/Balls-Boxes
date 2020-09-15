document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const togglePlayerButton = document.getElementById('toggle_player'); 
    const muteSlash = document.getElementById("mute"); 
    let isPlaying = false;
    
    const togglePlay = () => {
        isPlaying ? player.pause() : player.play();
        isPlaying ? muteSlash.style.visibility = "visible" : muteSlash.style.visibility = "hidden";
    };
    
    player.onplaying = () => {
        isPlaying = true;
    };
    
    player.onpause = () => {
        isPlaying = false;
    };
    
    togglePlayerButton.addEventListener('click', togglePlay); 
})
