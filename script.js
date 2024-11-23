generateGrid();
turnEvent();

/* Generates a new grid based on user input */
function generateGrid() {
    
    let size = Number(prompt("Please enter size of grid [2, 100]"));

    while ((size < 2 || size > 100 || Math.sign(size) == -1)) {
        size = prompt("Invalid input. Please enter a positive integer between 2 and 100");
    } 

    const container = document.querySelector("#container");
    const side = 100/(size);

    for (let i = 0; i < (size * size); i++) {
        const singleBox = document.createElement("div");
        singleBox.classList.add("singleBox");
        singleBox.style.border = "1px solid";
        singleBox.style.backgroundColor = "aquamarine";
        singleBox.style.minWidth = side + "%";
        singleBox.style.minHeight = side + "%";
        container.appendChild(singleBox);
    }
}

/* Adds Event Listener for all boxes of the grid */
function turnEvent() {
    const boxes = document.querySelectorAll(".singleBox");
    boxes.forEach((singleBox) => {
    singleBox.addEventListener("mouseenter", () => {
        singleBox.style.backgroundColor = "black";
    })
});
}


/* Resets the grid */
function removeGrid() {
    const boxes = document.querySelectorAll(".singleBox");
    boxes.forEach((singleBox) => {
        singleBox.remove();
    });
    generateGrid();
    turnEvent();
}


