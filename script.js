const grid = document.querySelector('div');
const button = document.querySelector('button');

function getUserInput() {
    let userInput = Number(prompt
        ("Please enter the desired number of squares per side of the grid "
        + "Default = 16 " 
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
        let boxDiv = document.createElement('div');
            boxDiv.className = "box";
            boxDiv.style.height = `${boxSizeString}%`
            boxDiv.style.width = `${boxSizeString}%`
            boxDiv.style.boxSizing = "border-box";
            boxDiv.style.border = "1px dashed black";
            grid.appendChild(boxDiv);
            boxDiv.addEventListener("mouseover", () => {
                boxDiv.style.backgroundColor = "black";
            })
            button.addEventListener('click', () => {
                grid.removeChild(boxDiv);
            })
    }
}


button.addEventListener('click', getUserInput);