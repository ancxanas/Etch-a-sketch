const container = document.getElementById('container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

//function to create grid
function makeGrid(value){
    grid.style.gridTemplateColumns = `repeat(${value}, 20px)`;
    grid.style.gridTemplateRows = `repeat(${value}, 20px)`;
    for(let i = 0; i < value; i++){
        for(let j = 0; j < value; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style','border: 1px solid #000000');
        cell.addEventListener('mouseover', toBlack);
        cell.addEventListener('mousedown', eraser);
        grid.appendChild(cell);
        }
    }
}

makeGrid(16);

function toBlack(e){
    e.target.style.backgroundColor = 'black';
}

function eraser(e){
    e.target.style.backgroundColor = 'white';
}
