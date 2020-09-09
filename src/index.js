import Draggable from '@shopify/draggable/lib/draggable';

document.addEventListener("DOMContentLoaded", () => {    
    const ballsContainer = Array.from(document.getElementsByClassName("balls"))[0]; 
    let draggableBalls = new Draggable(ballsContainer, { 
        draggable: 'img', 
    });

    let currentBall; 
    let [firstboxBall, secondBoxBall, thirdBoxBall] = Array.from(document.getElementsByClassName("inbox"))[0].children
    let [firstBox, secondBox, thirdBox] = Array.from(document.getElementsByClassName("box")); 
    let x; 
    let y; 
    
    const triggerMouseEvent = (node, eventType) => {
        const clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    const handleDragging = (e) => {
        currentBall = Array.from(document.getElementsByClassName("draggable--original"))[0];
        x = e.sensorEvent.data.clientX; 
        y = e.sensorEvent.data.clientY;

        if (x < 220  || 
            x > 850 || 
            y < 107 ||
            y > 500
        ) triggerMouseEvent(document.body, "mouseup"); 

        if (y > 410) {
            if (x > 340 && x < 375) {
                firstBox.style.borderBottom = "1px solid red"; 
                secondBox.style.border = "none"; 
                thirdBox.style.border = "none"; 
            } else if (x > 530 && x < 565) {
                firstBox.style.border = "none";
                secondBox.style.borderBottom = "1px solid red";
                thirdBox.style.border = "none"; 
            } else if (x > 700 && x < 735) {
                firstBox.style.border = "none";
                secondBox.style.border = "none";
                thirdBox.style.borderBottom = "1px solid red"; 
            }
        } else {
            firstBox.style.border = "none";
            secondBox.style.border = "none";
            thirdBox.style.border = "none";
        }
    }

    const handleStop = (e) => {
        if (y > 410) {
            if (x > 340 && x < 375) {
                firstboxBall.style.visibility = "visible"; 
                currentBall.style.visibility = "hidden"; 
            } else if (x > 530 && x < 565) {
                secondBoxBall.style.visibility = "visible";
                currentBall.style.visibility = "hidden"; 
            } else if (x > 700 && x < 735) {
                thirdBoxBall.style.visibility = "visible";
                currentBall.style.visibility = "hidden"; 
            }
        } 

        firstBox.style.border = "none";
        secondBox.style.border = "none";
        thirdBox.style.border = "none";
    }

    draggableBalls.on('drag:move', (e) => handleDragging(e))
    draggableBalls.on('drag:stop', (e) => handleStop(e)); 
})
