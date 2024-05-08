const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');
let currentPlayer = 'X';


function handleClick(event) {
    const cell = event.target;
    const isCellFilled = cell.textContent.trim() !== '';
    if (isCellFilled) 
        return;

    cell.textContent = currentPlayer;
    if (CheckWin(currentPlayer)) {
        statusText.textContent = `${currentPlayer} wins!`;
        highlightWinningCells(currentPlayer); //to color
        gifAppear(currentPlayer); //to have the gif
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
}

function CheckWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winConditions.some(condition => {
        return condition.every(index => {
            return cells[index].textContent.trim() === player;
        });
    });
}

function highlightWinningCells(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    winConditions.forEach(condition => {
        const isWinningCondition = condition.every(index => {
            return cells[index].textContent.trim() === player;
        });
        
        if (isWinningCondition) {
            condition.forEach(index => {
                cells[index].classList.add('winning-cell');
            });
        }
    });
}
function gifAppear(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    winConditions.forEach(condition => {
        const isWinningCondition = condition.every(index => {
            return cells[index].textContent.trim() === player;
        });
        
        if (isWinningCondition) {
            const pokemonDiv = document.querySelector('.pokemon');
            pokemonDiv.classList.remove('hidden');
        }
    });
}

function restartGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    statusText.textContent = "Player X's turn";
}

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    restartBtn.addEventListener('click', restartGame);

