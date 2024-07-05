const boardElement = document.getElementById('chessboard');
const initialBoardSetup = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

function renderBoard(board) {
    boardElement.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;
            square.dataset.color = (row + col) % 2 === 0 ? 'white' : 'black';
            if (board[row][col]) {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                piece.textContent = board[row][col];
                square.appendChild(piece);
            }
            boardElement.appendChild(square);
        }
    }
}

renderBoard(initialBoardSetup);
