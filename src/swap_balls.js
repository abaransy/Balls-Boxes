import { loadBalls } from './drag_and_drop'; 

export const swapBalls = (firstBallId, secondBallId) => {
    const firstBall = document.getElementById(firstBallId); 
    const secondBall = document.getElementById(secondBallId); 
    const radius = (secondBall.getBoundingClientRect().x - firstBall.getBoundingClientRect().x) / 2; 
    console.log(firstBall);
    console.log(secondBall);

    // console.log(firstBallId, secondBallId)
    // if (
    //     (firstBallId === "first_draggable_ball" && secondBallId === "second_draggable_ball") || 
    //     (firstBallId === "second_draggable_ball" && secondBallId === "third_draggable_ball")
    // ) 
    // {   console.log('here'); 
    //     firstBall.style.backgroundColor =  "red"; 
    //     firstBall.style.top = -40.5832; 
    //     firstBall.style.left = 9 +"px"; 
    //     secondBall.style.top = -40.5832; 
    //     secondBall.style.right = 9 + "px"; 
    //     console.log(firstBall)
    //     console.log(secondBall)
    // } else {
    //     firstBall.style.top = -66.8132;
    //     firstBall.style.left = "12px";
    //     secondBall.style.top = -66.8132;
    //     secondBall.style.right = "12px"; 
    // }

    // console.log(firstBall)
    // console.log(secondBall)


    let top = 0.1; 
    let left = 0; 
    let right = 0; 

    const frame = () => {
        if (top == 0) {
            clearInterval(interval);
            console.log(firstBall);
            console.log(secondBall);
        } else {
            left += 3; 
            right += 3;
            top = Math.sqrt( (2 * radius * left) - Math.pow(left, 2) );

            firstBall.style.transform = `translate( ${ `${left}px, ${-top}px` } )`;
            secondBall.style.transform = `translate( ${ `${-right}px, ${-top}px` } )`;
        }
    }

    let interval = setInterval(frame, 1);
}
  
