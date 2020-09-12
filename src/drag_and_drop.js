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
    ];
    
    const updatePlacings = (ballId) => {
        let ball = document.getElementById(ballId); 
        let ballX = ball.getBoundingClientRect().x.toFixed(0)
        let ballY = ball.getBoundingClientRect().y.toFixed(0)
        let sceneX = scene.getBoundingClientRect().x.toFixed(0)
        let sceneY = scene.getBoundingClientRect().y.toFixed(0)
        let deltaX = sceneX - ballX; 
        let deltaY = sceneY - ballY; 
   
        if (deltaY === -432) {
            if (deltaX === -124)  {
                placings[ballId] = 1;
            } else if (deltaX === -316) {
                placings[ballId] = 2; 
            } else if (deltaX === -508) {
                placings[ballId] = 3;
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
        draggable.zIndex = 3; 
        draggable.onDragEnd = () => updatePlacings(draggable.element.id);
    }); 
    
    return balls; 
}

