import { evaluatePlacings}  from './game'; 

export const loadBalls = () => {
    let scene = document.getElementsByClassName("scene")[0]; 
    let placings = {};
    let balls = Array.from(document.getElementsByClassName("balls")[0].children);
    let firstDraggable = new PlainDraggable(document.getElementById("first_draggable_ball"));
    let secondDraggable = new PlainDraggable(document.getElementById("second_draggable_ball"));
    let thirdDraggable = new PlainDraggable(document.getElementById("third_draggable_ball"));
    let draggables = [firstDraggable, secondDraggable, thirdDraggable]; 
    let container = document.getElementsByClassName("scene")[0]; 
    let targets = [
        {
        x: 168,
        y: 476,
        center: true
        }, 
        {
            x: 360,
            y: 476,
            center: true
        }, 
        {
            x: 552,
            y: 476,
            center: true
        }
    ]
    
    const updatePlacings = (ballId) => {
        let ball = document.getElementById(ballId); 
        let ballX = ball.getBoundingClientRect().x
        let ballY = ball.getBoundingClientRect().y
        let sceneX = scene.getBoundingClientRect().x
        let sceneY = scene.getBoundingClientRect().y
        let deltaX = sceneX - ballX; 
        let deltaY = sceneY - ballY; 
        //y = 432.0078125
        //x 124 316 512
        if (deltaY === - 432.0078125) {
            if (deltaX === -124.0078125)  {
                placings[ballId] = 1;
            } else if (deltaX === -316.0078125) {
                placings[ballId] = 2; 
            } else if (deltaX === -508.0078125) {
                placings[ballId] = 3
            }
        }
        
        console.log(deltaX, deltaY)
        if (Object.keys(placings).length === 3) {
            evaluatePlacings(placings); 
            placings = {}; 
        }
    }

    draggables.forEach(draggable => {
        draggable.containment = container; 
        draggable.snap = targets; 
        draggable.zIndex = 3; 
        draggable.onDragEnd = () => updatePlacings(draggable.element.id);
    }); 
    
    return balls; 
}

