const container = document.getElementById('container');

//Header div
const headingDiv = document.createElement('div');
headingDiv.classList.add('heading-div');
container.appendChild(headingDiv);

//Heading Etch-a-Sketch
const HEADING = document.createElement('h1');
HEADING.textContent = 'Etch-a-Sketch';
headingDiv.appendChild(HEADING);

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

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
gridContainer.appendChild(grid);
container.appendChild(gridContainer);

//function to create grid
function makeGrid(value){
    let gridWidth = 500 / value;
    grid.style.gridTemplateColumns = `repeat(${value}, ${gridWidth}px)`;
    grid.style.gridTemplateRows = `repeat(${value}, ${gridWidth}px)`;
    for(let i = 0; i < value; i++){
        for(let j = 0; j < value; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        grid.appendChild(cell);
        }
    }
}

//clear grid
function clearGrid(){
    grid.innerHTML = '';
}


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//to change the cell color to random on mouseover
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = getRandomColor();
}

//function to reset grid
function resetGrid(){
    const value = prompt('Input a number between 1 to 100');
    if(value > 100 || value <= 0 || value != Number(value)){
        resetGrid();
        return;
    }

        clearGrid();
        makeGrid(value);

}

//Generate random colours
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

resetButton.addEventListener('click', resetGrid);

window.onload = () => {makeGrid(16)};
