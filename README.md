# Balls & Boxes
Balls & Boxes is a fun and challenging memory game. The balls are going to be shuffled, and your task to remember their original positions. How many swaps can you recall?

## Some Key Features
* Utilized PlainDraggable to allow seamless interaction with the 3 red balls.
* JavaScript & CSS transform to create elegant swapping animations.
* A level generator dynamically generates a potentially infinite quantity of unique new puzzles and adds difficulty with each successive win.

### Level Gnerating Algorithm
```javascript  
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
        
        level.instructions.push( 
            [ 
                Ids[firstIdIdx], 
                Ids[secondIdIdx] 
            ]
        ); 
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
```
### Gameplay
![game_play_gif](src/images/game_play.gif)
