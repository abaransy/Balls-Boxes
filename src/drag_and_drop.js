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
        x: 166,
        y: 423,
        center: true
        }, 
        {
            x: 358,
            y: 423,
            center: true
        }, 
        {
            x: 550,
            y: 423,
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

        if (deltaY === -368.59375) {
            if (deltaX === -111.59375)  {
                placings[ballId] = 1;
            } else if (deltaX === -303.59375) {
                placings[ballId] = 2; 
            } else if (deltaX === -495.59375) {
                placings[ballId] = 3
            }
        }
        
        if (Object.keys(placings).length === 3) {
            evaluatePlacings(placings); 
            placings = {}; 
        }
    }

    draggables.forEach(draggable => {
        draggable.containment = container; 
        draggable.snap = targets; 
        draggable.zIndex = 2; 
        draggable.onDragEnd = () => updatePlacings(draggable.element.id);
    }); 
    
    return balls; 
}

