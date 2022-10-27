const container = document.getElementById('container');



//div for buttons
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button-div');
container.appendChild(buttonDiv);

//A button to reset Everything
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
buttonDiv.appendChild(resetButton);

//grid in a seperate div
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

//function to create grid
function makeGrid(value){
    let gridWidth = (grid.offsetWidth / value) - getComputedStyle(grid).gap.slice(0, -2);
    grid.style.gridTemplateColumns = `repeat(${value}, ${gridWidth}px)`;
    grid.style.gridTemplateRows = `repeat(${value}, ${gridWidth}px)`;
    for(let i = 0; i < value; i++){
        for(let j = 0; j < value; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', toColor);
        grid.appendChild(cell);
        }
    }
}


//to change the cell color to black on mouseover
function toColor(e){
    e.target.style.backgroundColor = '#333333';
}

function resetGrid(){
    const value = prompt('Input a number of Squares');
    grid.innerHTML = '';
    makeGrid(value);
}

resetButton.addEventListener('click',resetGrid);

window.onload = () => {makeGrid(16)};
