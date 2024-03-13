const grid = document.querySelector('div');
const button = document.querySelector('button');

function getUserInput() {
    let userInput = Number(prompt
        ("Please enter the desired number of squares per side of the grid "
        + "Default = 16 " 
        + "Max = 100"));
    return userInput;
}

function generateGrid() {
    for (let i = 0; i < 256; i++) {
        let boxDiv = document.createElement('div');
        boxDiv.className = "box";
        boxDiv.style.height = "50px";
        boxDiv.style.width = "55px";
        boxDiv.style.border = "1px dashed black";
        grid.appendChild(boxDiv);
        boxDiv.addEventListener("mouseover", () => {
            boxDiv.style.backgroundColor = "black";
        })
        }
}

button.onclick = getUserInput;
generateGrid();
