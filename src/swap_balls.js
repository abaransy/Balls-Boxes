const swapBalls = (childA, childB) => {
    const radius = (childB.getBoundingClientRect().x - childA.getBoundingClientRect().x) / 2; 
    let top = 0.1; 
    let left = 0; 
    let right = 0; 

    const frame = () => {
        if (top == 0) {
            clearInterval(id);
        } else {
            left += 3; 
            right += 3;
            top = Math.sqrt( (2 * radius * left) - Math.pow(left, 2) );

            childA.style.top = -top + "px";
            childA.style.left = left + "px";
            childB.style.top = -top + "px";
            childB.style.right = right + "px";
        }
    }

    let id = setInterval(frame, 1);
}
  
