const cells=document.querySelectorAll(".cell");
const board=document.getElementById("board");
const winnerText=document.getElementById("winner-text");
const resetButton=document.getElementById("reset-button");
let currentPlayer="X";
let gammeOver=false;

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
        const[a,b,c]=combo
    }
}
