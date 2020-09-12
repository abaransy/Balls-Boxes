const firstBallId = "first_draggable_ball"; 
const secondBallId = "second_draggable_ball"; 
const thirdBallId = "third_draggable_ball"; 
const IdToNumber = {
    first_draggable_ball: 0, 
    second_draggable_ball: 1,
    third_draggable_ball: 2
}

const Ids = [firstBallId, secondBallId, thirdBallId];
let initial = [1, 2, 3]; 

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const resetInitial = () => {
    initial = [1, 2, 3]; 
}

const swap = (first, second) => {
    first = IdToNumber[first]; 
    second = IdToNumber[second]; 
    let temp = initial[first]; 
    initial[first] = initial[second]; 
    initial[second] = temp;
}

export const createLevel = (steps) => {
    let level = {
        instructions: [],
    };
     
    for(let i = 0; i < steps; i++) {
        let firstIdIdx; 
        let secondIdIdx;
        
        while ((!firstIdIdx && !secondIdIdx) || firstIdIdx >= secondIdIdx) {
            firstIdIdx = getRandomInt(2); 
            secondIdIdx = getRandomInt(3)
        }
        
        level.instructions.push( [ Ids[firstIdIdx], Ids[secondIdIdx] ]); 
    }
    
    for(let i = 0; i < level.instructions.length; i++) {
        let firstBall = level.instructions[i][0];
        let secondBall = level.instructions[i][1];
    
        swap(firstBall, secondBall); 
    }
    
    level.finalPlacings = {
        "first_draggable_ball": initial[0], 
        "second_draggable_ball": initial[1], 
        "third_draggable_ball": initial[2]
    };  
    
    resetInitial(); 
    
    return level; 
}

// export const createLevels = (numOfLevels) => {
//     for (let i = 0; i < numOfLevels; i++) levels.push(createLevel(i + 1)); 
//     return levels; 
// }

  