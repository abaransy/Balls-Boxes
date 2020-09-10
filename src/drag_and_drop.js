document.addEventListener("DOMContentLoaded", () => {
    let firstDraggable = new PlainDraggable(document.getElementById("first_draggable_ball"));
    let secondDraggable = new PlainDraggable(document.getElementById("second_draggable_ball"));
    let thirdDraggable = new PlainDraggable(document.getElementById("third_draggable_ball"));
    let draggables = [firstDraggable, secondDraggable, thirdDraggable]; 
    let container = document.getElementsByClassName("scene")[0]; 
    let targets = [{
        x: 166,
        y: 423,
        center: true
    }, 
    {
        x: 358,
        y: 423,
        center: true
    }, 
    {
        x: 550,
        y: 423,
        center: true
    }
    ]

    draggables.forEach(draggable => {
        draggable.containment = container; 
        draggable.snap = targets; 
    }); 

})