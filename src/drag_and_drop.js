document.addEventListener("DOMContentLoaded", () => {
    let firstDraggable = new PlainDraggable(document.getElementById("first_dragable_ball"));
    let secondDraggable = new PlainDraggable(document.getElementById("second_dragable_ball"));
    let thirdDraggable = new PlainDraggable(document.getElementById("third_dragable_ball"));
    let draggables = [firstDraggable, secondDraggable, thirdDraggable]; 
    let container = document.getElementsByClassName("scene")[0]; 
    let targets = [{
        x: 166,
        y: 375,
        center: true
    }, 
    {
        x: 358,
        y: 375,
        center: true
    }, 
    {
        x: 550,
        y: 375,
        center: true
    }
    ]

    draggables.forEach(draggable => {
        draggable.containment = container; 
        draggable.snap = targets; 
    }); 
})