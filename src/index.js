document.addEventListener("DOMContentLoaded", () => {    
    let dragableBalls = Array.from(document.getElementsByClassName("dragable")); 
    let offset = [0, 0]; 
    let isDown = false; 
    let currentBall; 
    
    dragableBalls.forEach(dragableBall => {
        dragableBall.addEventListener('mousedown', (e) => {
        isDown = true;
        currentBall = e.currentTarget; 
        offset = [
            dragableBall.offsetLeft - e.clientX,
            dragableBall.offsetTop - e.clientY
        ];
    })});

    document.addEventListener('mouseup', () => {
        isDown = false;
    });

    document.addEventListener("mousemove", (e) => {
        e.preventDefault(); 
        if (isDown) {
            console.log(currentBall)
            currentBall.style.left(e.clientX + offset[0] + "px");
            currentBall.style.top(e.clientY + offset[1] + "px");
        }
    })
})

// dragableBall => dragableBall.addEventListener('mousedown', (e) => {
//     isDown = true;
//     offset = [
//         dragableBall.offsetLeft - e.clientX,
//         dragableBall.offsetTop - e.clientY
//     ];
// }, true));