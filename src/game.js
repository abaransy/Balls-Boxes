import levels from './levels'; 
import { swapBalls } from './swap_balls';  
import { loadBalls } from './drag_and_drop'; 

let currLevelIdx = 0
let currLevel = levels[currLevelIdx]; 
let score; 
let balls; 
let modal; 
let levelBox; 

const resetBallsPosition = (balls) => {
    balls.forEach(ball => {
        ball.style.top = "0px";
        ball.style.right = "0px";
        ball.style.left = "0px";
        ball.style.bottom = "0px";
        ball.style.transform = "none";
    });
}

export const play = () => {
    balls = loadBalls();
    modal = document.getElementById("start_game_modal"); 
    levelBox = document.getElementById("level"); 

    levelBox.style.visibility = "visible"; 
    levelBox.innerHTML = `Level ${currLevelIdx + 1}`; 
    modal.style.opacity = "0"; 
    modal.style.visibility = "visible"; 

    let instructions = currLevel.instructions; 
    let pairIdx = 0; 
    
    const shuffleBalls = () => {
        if (pairIdx === instructions.length) {
            clearInterval(interval); 
            resetBallsPosition(balls); 
            modal.style.visibility = "hidden";
        } else {
            let pair = instructions[pairIdx]; 
            swapBalls(pair[0], pair[1]); 
            resetBallsPosition(balls); 
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

const handleWin = () => {
    currLevelIdx++;
    currLevel = levels[currLevelIdx];
    resetBallsPosition(balls);
    play(modal, levelBox); 
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