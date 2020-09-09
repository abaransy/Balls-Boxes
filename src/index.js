import Draggable from '@shopify/draggable/lib/draggable';

document.addEventListener("DOMContentLoaded", () => {    
    const ballsContainer = Array.from(document.getElementsByClassName("balls"))[0]; 
    let draggableBalls = new Draggable(ballsContainer, { 
        draggable: 'img', 
    });
    
    const triggerMouseEvent = (node, eventType) => {
        const clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    const handleDragging = (e) => {
        if (e.sensorEvent.data.clientX < 220  || 
            e.sensorEvent.data.clientX > 850 || 
            e.sensorEvent.data.clientY < 107 ||
            e.sensorEvent.data.clientY > 500
        ) triggerMouseEvent(document.body, "mouseup"); 
    }


    draggableBalls.on('drag:move', (e) => handleDragging(e))
})
