const area = 600; 

const grid_container = document.getElementById("grid_containers");

grid_container.style.width = `${area}px`
grid_container.style.height = `${area}px`

const gridSize = 16;

let colored = "black";

function createGrid(size){
    grid_container.innerHTML = ''; // to clear the existing grid when creating a new grid

    for(let i =0; i<size; i++){
        for(let j =0; j< size; j++){
            const cell = document.createElement('div');
            cell.style.width=`${(area/size)}px`;
            cell.style.height=`${(area/size)}px`;
            grid_container.appendChild(cell);
            
            const hover = cell.addEventListener("mouseover", event=> {
                if(colored === "random"){
                    event.target.style.backgroundColor =
                    `rgb(${Math.floor(Math.random()*256)},
                    ${Math.floor(Math.random()*256)},
                    ${Math.floor(Math.random()*256)}
                    )`;
                }
                else if(colored === "custom"){
                    const errorDisplay = document.getElementById("error2");

                    const r = parseInt(document.getElementById("r_val").value, 10);
                    const g = parseInt(document.getElementById("g_val").value, 10);
                    const b = parseInt(document.getElementById("b_val").value, 10);
                    if(r > 255 || g > 255 || b> 255){
                        errorDisplay.style.display ='flex';
                        return;
                    }
                    errorDisplay.style.display ='none';
                    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
                }
                else{
                    errorDisplay.style.display ='none';
                    event.target.style.backgroundColor = colored;

                }
            })
        }
    }
}

createGrid(gridSize);

const val = document.getElementById("input_val");

const errorDisplay = document.getElementById("error"); 

val.addEventListener("change", event =>{
    let newSize = parseInt(val.value, 10);
    if(newSize >= 2 && newSize <= 100){
        errorDisplay.style.display ='none';
        createGrid(newSize);
    }
    else{
        errorDisplay.style.display ='flex';
    }
})


function changeColor(color){
    colored = color;
}
