const boxes = document.querySelectorAll('.box')
const restartBtn = document.querySelector('#restart-btn')

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
];

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    boxes.forEach(cell => cell.addEventListener('click', boxClicked))
    restartBtn.addEventListener('click', restartGame);
    running = true;
}

function boxClicked() {
    const cellIndex = this.getAttribute(box);

    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateBox(this, cellIndex);
    checkWinner();
}

function updateBox() {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {

}

function checkWinner() {
    
}

function restartGame() {

}