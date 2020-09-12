import { createLevels } from './levels'; 
import { swapBalls } from './swap_balls';  
import { loadBalls } from './drag_and_drop'; 
import { setCountDown } from './start_game_modal'; 

let levels = createLevels(20); 
let currLevelIdx = 0
let currLevel = levels[currLevelIdx]; 
let instructionsBox;
let gameState;
let score; 
let startButton;
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
    instructionsBox = document.getElementsByClassName('instructions')[0]; 
    gameState = document.getElementsByClassName("game_state")[0]; 
    score = document.getElementById("score"); 
    balls = loadBalls();
    balls.forEach(ball => ball.style.transition = "none"); 
    modal = document.getElementById("start_game_modal"); 
    levelBox = document.getElementById("level"); 
    seconds = document.getElementById('seconds'); 
    startButton = document.getElementById("start_button"); 

    instructionsBox.style.visibility ="hidden"; 
    gameState.style.visibility = "visible"; 
    levelBox.innerHTML = `Level ${currLevelIdx + 1}`; 
    modal.style.opacity = "0"; 
    modal.style.visibility = "visible"; 
    seconds.style.visibility = "hidden"; 
    balls.forEach(ball => ball.style.transition = "none");
    startButton.style.display = "none"

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

const startNewGame = () => {
    let instructionsHeader = instructionsBox.children[0];
    let instructionsParagraph = instructionsBox.children[1]; 
   
    balls.forEach(ball => ball.style.transition = "0.3s all");
    resetBallsPositionAndColor(balls);
    instructionsHeader.innerHTML = "Instructions"; 
    instructionsHeader.style.color = "black"; 
    instructionsBox.style.height = "6rem";
    instructionsBox.style.width = "30rem";
    instructionsParagraph.innerHTML = "Your goal is to place the balls in the boxes that correspond with the balls' original ordering. You have 3 seconds between each level. Good luck!";
    startButton.style.visibility = "visible";  
    seconds.style.visibility = "visible";
    seconds.innerHTML = ""; 
    levels = createLevels(20); 
    currLevelIdx = 0;
    currLevel = levels[currLevelIdx];
    score.innerHTML = "Your Score: 0";
    startButton.style.display = "block";
}

const handleLoss = () => {
    let gameOver = instructionsBox.children[0]; 
    let instructionsParagraph = instructionsBox.children[1]; 
  
    instructionsBox.style.transition = "0.1s all"; 
    gameOver.innerHTML = "Incorrect"
    gameOver.style.color = "red";
    gameOver.style.fontWeight = "700"; 
    gameState.style.visibility = "hidden"; 
    instructionsBox.style.visibility = "visible"; 
    instructionsBox.style.height = "auto";
    instructionsBox.style.width = "auto";
    instructionsParagraph.innerHTML = ""; 
    modal.style.visibility = "visible"; 
    modal.style.opacity = "1"; 
    startButton.style.visibility = "hidden"; 

    setTimeout(startNewGame, 800); 
}

const handleWinColors = () => {
    balls.forEach(ball => {
        ball.style.transition = "0.3s all";
        ball.style.backgroundColor = "rgb(4,128,1)"; 
        ball.style.borderColor = "darkgreen"; 
    }); 
}

const handleWin = () => {
    score.innerHTML = `Your Score: ${1000 * (currLevelIdx + 1)}`;
    currLevelIdx++;
    currLevel = levels[currLevelIdx];
    handleWinColors(); 
    setTimeout( () => {
        resetBallsPositionAndColor(balls);
        setCountDown(seconds, false, modal, document.getElementById("start_button")); 
    }, 1000)
}

export const evaluatePlacings = (placings) => {
    let lost = false; 

    for (let ball in currLevel.finalPlacings) {
        if (currLevel.finalPlacings[ball] !== placings[ball]) {
            lost = true;
            break; 
        } 
    }

    if (lost) {
        handleLoss(); 
    } else {
        handleWin(); 
    }
}