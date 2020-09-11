import levels from './levels'; 
import { swapBalls } from './swap_balls';  

let currLevelIdx = 0
let currLevel = levels[currLevelIdx]; 
let score; 
 
export const play = (startGameModal, level, ...balls) => {
    level.style.visibility = "visible"; 
    level.innerHTML = `Level ${currLevelIdx + 1}`; 
    startGameModal.style.opacity = "0"; 

    let instructions = currLevel.instructions; 
    let pairIdx = 0; 
    let pair = instructions[pairIdx]; 

    const shuffleBalls = () => {
        console.log(startGameModal); 
        console.log(pairIdx) 
        console.log(instructions.length); 

        if (pairIdx === instructions.length) {
            clearInterval(interval); 
            balls.forEach(ball => {
                ball.style.top = "";
                ball.style.right = "";
                ball.style.left = "";
            });
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

export const evaluatePlacings = () => {
    console.log('evaluating placings') 
}