const container = document.querySelector("#container");
const resetBtn = document.querySelector("#resetBtn");

function makeGrid(size){
    //960px is width and height of space
    const squareSize = 960/size;
    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        //hover event
        square.addEventListener("mouseenter", () => {
            square.classList.add("hovered");
        })
        //add square div to the DOM
        container.appendChild(square);
    } 
}

//helper function
function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}



//behavior for reset button
resetBtn.addEventListener("click", () => {
    let user_size = prompt("Please enter a new grid size between 1 and 100");
    user_size = parseInt(user_size);

    if (user_size > 0 && user_size <= 100){
        clearGrid();
        makeGrid(user_size);
    }
    else{
        alert("please enter a number between 1 and 100")
    }

})


//default grid
makeGrid(16);