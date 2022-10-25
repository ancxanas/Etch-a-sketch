const container = document.getElementById('container');

function makeGrid(value){
    for(let i = 0; i < value; i++){
        for(let j = 0; j < value; j++){
        let cell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${value}, 20px)`;
        container.style.gridTemplateRows = `repeat(${value}, 20px)`;
        cell.setAttribute('style','border: 1px solid black');
        container.appendChild(cell);
        }
    }
}

makeGrid(16);

