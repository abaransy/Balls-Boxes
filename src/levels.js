const firstBallId = "first_draggable_ball"; 
const secondBallId = "second_draggable_ball"; 
const thirdBallId = "third_draggable_ball"; 

let level1 = {
    instructions: [
        [firstBallId, thirdBallId], 
    ], 

    finalPlacings: {
        "first_draggable_ball": 3 , 
        "second_draggable_ball": 2, 
        "third_draggable_ball": 1
    }
}

let level2 = {
    instructions: [
        [firstBallId, thirdBallId], 
        [secondBallId, thirdBallId], 
    ], 
    
    finalPlacings: {
        "first_draggable_ball": 3, 
        "second_draggable_ball": 1, 
        "third_draggable_ball": 2
    }
}


let level3 = {
    instructions: [
        [firstBallId, secondBallId], 
        [secondBallId, thirdBallId], 
        [firstBallId, thirdBallId] 
    ], 
    
    finalPlacings: {
        "first_draggable_ball": 1, 
        "second_draggable_ball": 3, 
        "third_draggable_ball": 2
    }
}

let level4 = {
    instructions: [
        [secondBallId, thirdBallId], 
        [firstBallId, thirdBallId], 
        [firstBallId, secondBallId], 
        [firstBallId, thirdBallId], 
    ], 
    
    finalPlacings: {
        ballId: 1, 
        ballId: 2, 
        ballId: 3
    }
}
       
let level5 = {
    instructions: [
        [firstBallId, secondBallId], 
        [secondBallId, thirdBallId], 
        [firstBallId, secondBallId], 
        [secondBallId, thirdBallId], 
        [firstBallId, thirdBallId] 
    ], 
    
    finalPlacings: {
        ballId: 2, 
        ballId: 1, 
        ballId: 3
    }
}
       

let levels = [level1, level2, level3, level4, level5]
export default levels; 