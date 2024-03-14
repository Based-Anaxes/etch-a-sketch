const grid = document.querySelector('div');
const button = document.querySelector('button');

function getUserInput() {
    let userInput = Number(prompt
        ("Please enter the desired number of squares per side of the grid "
        + "Max = 100"));
    if (userInput > 100) {
        userInput = 100;
    }
    let boxSize = 100/userInput;
    generateGrid(userInput, boxSize);
}

function generateGrid(userInput, boxSize) {
    let boxSizeString = boxSize.toString();
    for (let i = 0; i < userInput * userInput; i++) {
        let box = document.createElement('div');
            box.style.height = `${boxSizeString}%`
            box.style.width = `${boxSizeString}%`
            box.style.boxSizing = "border-box";
            box.style.border = "1px dashed black";
            grid.appendChild(box);
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
            })
            button.addEventListener('click', () => {
                grid.removeChild(box);
            })
    }
}


button.addEventListener('click', getUserInput);