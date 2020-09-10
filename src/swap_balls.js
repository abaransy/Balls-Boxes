export const swapBalls = (firstBall, secondBall) => {
    const radius = (secondBall.getBoundingClientRect().x - firstBall.getBoundingClientRect().x) / 2; 
    let top = 0.1; 
    let left = 0; 
    let right = 0; 

    const frame = () => {
        if (top == 0) {
            clearInterval(interval);
        } else {
            left += 3; 
            right += 3;
            top = Math.sqrt( (2 * radius * left) - Math.pow(left, 2) );

            firstBall.style.top = -top + "px";
            firstBall.style.left = left + "px";
            secondBall.style.top = -top + "px";
            secondBall.style.right = right + "px";
        }
    }

    let interval = setInterval(frame, 1);
}
  
