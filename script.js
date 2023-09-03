const cells=document.querySelectorAll(".cell");
const board=document.getElementById("board");
const winnerText=document.getElementById("winner-text");
const resetButton=document.getElementById("reset-button");
let currentPlayer="X";
let gameOver=false;

function checkWinner(){
    const winnigCombos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(const combo of winnigCombos){
        const[a,b,c]=combo;
        if(cells[a].textContent&&cells[a].textContent==cells[b].textContent&&cells[a].textContent==cells[c].textContent){
            gameOver=true;
            winnerText.textContent='Player ${currentPlayer} wins!';
            cells[a].style.backgroundColor="lightgreen";
            cells[b].style.backgroundColor="lightgreen";
            cells[c].style.backgroundColor="lightgreen";
            
        }
    }
}

function handleClick(event){
    const cell=event.target;
    if(!cell.textContent&&!gameOver){
        cell.textContent=currentPlayer;
        checkWinner();
        currentPlayer=currentPlayer==="X" ? "O" : "X";
    }
}
function resetGame(){
    for(const cell of cells){
        cell.textContent="";
        cell.style.backgroundColor="white";
    }
    winnerText.textContent="";
    currentPlayer="X";
    gameOver=false;
}
cells.forEach