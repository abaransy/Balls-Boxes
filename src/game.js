import levels from './levels'; 
import { swapBalls } from './swap_balls';  
import { loadBalls } from './drag_and_drop'; 
import { setCountDown } from './start_game_modal'; 

let currLevelIdx = 0
let currLevel = levels[currLevelIdx]; 
let score; 
let balls; 
let modal; 
let levelBox; 
let seconds; 

const resetBallsPositionAndColor = (balls) => {
    balls.forEach(ball => {
        ball.style.top = "0px";
        ball.style.right = "0px";
        ball.style.left = "0px";
        ball.style.bottom = "0px";
        ball.style.transform = "none";
        ball.style.backgroundColor = "rgb(223, 22, 22)";
        ball.style.borderColor = "rgb(131, 50, 50)";
    });
}

export const play = () => {
    balls = loadBalls();
    balls.forEach(ball => ball.style.transition = "none"); 
    modal = document.getElementById("start_game_modal"); 
    levelBox = document.getElementById("level"); 
    seconds = document.getElementById('seconds'); 

    levelBox.style.visibility = "visible"; 
    levelBox.innerHTML = `Level ${currLevelIdx + 1}`; 
    modal.style.opacity = "0"; 
    modal.style.visibility = "visible"; 
    seconds.style.visibility = "hidden"; 

    let instructions = currLevel.instructions; 
    let pairIdx = 0; 
    
    const shuffleBalls = () => {
        if (pairIdx === instructions.length) {
            clearInterval(interval); 
            resetBallsPositionAndColor(balls); 
            modal.style.visibility = "hidden";
        } else {
            let pair = instructions[pairIdx]; 
            swapBalls(pair[0], pair[1]); 
            resetBallsPositionAndColor(balls); 
        }
    }

    let interval = setInterval(() => {
        shuffleBalls();
        pairIdx += 1; 
    }, 1500);
}

const handleLoss = () => {
    console.log('lost')
}

const handleWinColors = () => {
    balls.forEach(ball => {
        ball.style.transition = "0.3s all";
        ball.style.backgroundColor = "forestgreen"; 
        ball.style.borderColor = "darkgreen"; 
    }); 
}

const handleWin = () => {
    currLevelIdx++;
    currLevel = levels[currLevelIdx];
    handleWinColors(); 
    setTimeout( () => {
        resetBallsPositionAndColor(balls);
        setCountDown(seconds, false, modal, document.getElementById("start_button")); 
    }, 500)
}

export const evaluatePlacings = (placings) => {
    let lost = false; 

    for (let ball in currLevel.finalPlacings) {
        if (currLevel.finalPlacings[ball] !== placings[ball]) {
            lost = true; 
        } 
    }

    if (lost) {
        handleLoss(); 
    } else {
        handleWin(); 
    }
}