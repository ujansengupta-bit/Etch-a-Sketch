const area = 600; 

const grid_container = document.getElementById("grid_containers");

grid_container.style.width = `${area}px`
grid_container.style.height = `${area}px`

const gridSize = 16;

function createGrid(size){
    grid_container.innerHTML = ''; // to clear the existing grid when creating a new grid

    for(let i =0; i<size; i++){
        for(let j =0; j< size; j++){
            const cell = document.createElement('div');
            cell.style.width=`${(area/size)-2}px`;
            cell.style.height=`${(area/size)-2}px`;
            grid_container.appendChild(cell); 
            const hover = cell.addEventListener("mouseover", event=> {
                event.target.style.backgroundColor = "black";
            })
        }
    }
}

createGrid(gridSize);
