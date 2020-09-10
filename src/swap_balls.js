// document.addEventListener('DOMContentLoaded', () => {
//     const childA = document.getElementById('first_dragable_ball');
//     const childB = document.getElementById('second_dragable_ball');
//     const finalChildAStyle = {
//         x: null,
//         y: null,
//     };
//     const finalChildBStyle = {
//         x: null,
//         y: null,
//     };
    
//     let swapDone = false;
    
//     document.getElementById('swap').addEventListener('click', () => {
//         if (swapDone === false) {
//             let div = Array.from(document.getElementsByClassName("balls"))[0]; 
//             div.style.transition = ("all 1s"); 
//             // div.style.transformOrigin = "center center";
//             div.style.transform = "rotate(180deg)";
//             // let positionObjA =  childA.getBoundingClientRect(); 
//             // let positionObjB =  childA.getBoundingClientRect(); 
//             // let childAStartX = positionObjA.left; 
//             // let childAstartY = positionObjA.top; 
//             // let childBStartX = positionObjB.left; 
//             // let childBstartY = positionObjB.top;
      
//             // // finalChildAStyle.x = childA.getBoundingClientRect().left - childB.getBoundingClientRect().left;
//             // // finalChildAStyle.y = childB.getBoundingClientRect().top - childA.getBoundingClientRect().top;
//             // // finalChildBStyle.x = childB.getBoundingClientRect().left - childA.getBoundingClientRect().left;
//             // // finalChildBStyle.y = childA.getBoundingClientRect().top - childB.getBoundingClientRect().top;
//             // childA.style.transform = `translate(${childBStartX.x}px, ${childBstartY.y}px)`;
//             // childB.style.transform = `translate(${childAStartX.x}px, ${childAstartY.y}px)`;
    
//             // setTimeout(() => {
//             //     // document.querySelector('.container').insertBefore(childB, childA);
//             //     childA.classList.remove('transition');
//             //     childB.classList.remove('transition');
//             //     childB.removeAttribute('style');
//             //     childA.removeAttribute('style');
//             // }, 300);
//         }
//         swapDone = true;
//     });
// })    
