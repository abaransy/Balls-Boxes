export const swapBalls = (firstBallId, secondBallId) => {
    const firstBall = document.getElementById(firstBallId); 
    const secondBall = document.getElementById(secondBallId); 
    let radius;  
    if (
        (firstBallId === "first_draggable_ball" && secondBallId === "second_draggable_ball") ||
        (firstBallId === "second_draggable_ball" && secondBallId === "third_draggable_ball")
    ) 
    {
        radius = 96; 
    } else {
        radius = 192; 
    }

    let top = 0.1; 
    let left = 0; 
    let right = 0; 
    let positive = false;
    // if (firstBallId === "second_draggable_ball" && secondBallId === "third_draggable_ball") {
    //     positive = false; 
    // } 
    const frame = () => {
        if (top == 0) {
            clearInterval(interval);
        } else {
            left += 3; 
            right += 3;
            top = Math.sqrt( (2 * radius * left) - Math.pow(left, 2) );

            firstBall.style.transform = `translate( ${ `${left}px, ${-top}px` } )`;
            secondBall.style.transform = `translate( ${ `${positive ? right : -right}px, ${-top}px` } )`;
            // console.log(firstBall)
            // console.log(secondBall)
        }
    }

    let interval = setInterval(frame, 1);
}
  
