import levels from './levels'; 
import { swapBalls } from './swap_balls';  
import { loadBalls } from './drag_and_drop'; 

let currLevelIdx = 0
let currLevel = levels[currLevelIdx]; 
let score; 
let ballElements; 
let modal; 
let levelBox; 

const resetBallsPosition = (balls) => {
    balls.forEach(ball => {
        ball.style.top = "0px";
        ball.style.right = "0px";
        ball.style.left = "0px";
        ball.style.bottom = "0px";
        ball.style.transform = "none"
    });
}

export const play = (startGameModal, level) => {
    ballElements = loadBalls();
    modal = modal || startGameModal; 
    levelBox = levelBox || level; 

    level.style.visibility = "visible"; 
    level.innerHTML = `Level ${currLevelIdx + 1}`; 
    startGameModal.style.opacity = "0"; 

    let instructions = currLevel.instructions; 
    let pairIdx = 0; 
    let pair = instructions[pairIdx]; 

    const shuffleBalls = () => {
        if (pairIdx === instructions.length) {
            clearInterval(interval); 
            resetBallsPosition(ballElements); 
            startGameModal.style.display = "none";
        } else {
            swapBalls(pair[0], pair[1]); 
        }
    }

    let interval = setInterval(() => {
        shuffleBalls();
        pairIdx += 1; 
    }, 1000);
}


export const evaluatePlacings = (placings) => {
    let lost = false; 

    for (let ball in currLevel.finalPlacings) {
        if (currLevel.finalPlacings[ball] !== placings[ball]) {
            lost = true; 
        } 
    }

    if (lost) {
        console.log('lost'); 
    } else {
        currLevelIdx++;
        currLevel = levels[currLevelIdx]; 
        resetBallsPosition(ballElements);
        play(modal, levelBox); 
    }
}