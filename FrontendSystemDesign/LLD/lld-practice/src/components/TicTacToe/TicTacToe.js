const winData = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const playerMoves = {
    1: [],
    2: []
}

let isFirstPlayer = true;
let moveCount = 0;
let isMatchOver = false;
let winner = -1;
let timer;

const handlePlayerAction = (e) => {
    if (e.target.textContent || isMatchOver) {
        return;
    }

    if (isFirstPlayer) {
        e.target.innerText = 'X';
        moveCount++;
        playerMoves[1].push(+e.target.id);
    } else {
        e.target.innerText = 'O';
        moveCount++;
        playerMoves[2].push(+e.target.id);
    }

    if (moveCount >= 5) {
        console.log('moveCount >= 5')
        checkWin();
    }

    e.target.style.userSelect = 'none';
    isFirstPlayer = !isFirstPlayer;
}

const resetGame = () => {
    console.log(tttContainerEl.children);
    Object.values(tttContainerEl.children).map(cell => cell.innerText = '');
    playerMoves[1] = [];
    playerMoves[2] = [];
    tttContainerEl.style.border = 'none';
    moveCount = 0;
    isFirstPlayer = true;
    isMatchOver = false;
    winner = -1;
    clearTimeout(timer);
}

const checkWin = () => {
    console.log('playerMoves', playerMoves)
    formatWinCombos();
}

const formatWinCombos = () => {
    winData.some(win => {
        const [c1, c2, c3] = win;
        console.log('insdie P1 check moveCount', c1, c2, c3, playerMoves, playerMoves[1][c1], playerMoves[1][c2], playerMoves[1][c3], moveCount);
        if (playerMoves[1].includes(c1) && playerMoves[1].includes(c2) && playerMoves[1].includes(c3)) { winner = 1; return true }
        if (playerMoves[2].includes(c1) && playerMoves[2].includes(c2) && playerMoves[2].includes(c3)) { winner = 2; return true }
        return false;
    });

    if (winner === 1) {
        console.log('PLAYER 1 wins');
        tttContainerEl.style.border = '5px solid green';
        isMatchOver = true;
        timer = setTimeout(() => {
            alert('PLAYER 1 wins 🥇')
            resetGame();
        }, 100);
    }

    if (winner === 2) {
        console.log('PLAYER 2 wins');
        tttContainerEl.style.border = '5px solid orange';
        isMatchOver = true;
        timer = setTimeout(() => {
            alert('PLAYER 2 wins 🥇')
            resetGame();
        }, 100);
    }

    if (moveCount === 9) {
        console.log('resetting game moveCount', moveCount)
        resetGame();
    }
}


const tttContainerEl = document.querySelector('.ttt-container');
tttContainerEl.style.width = '305px';
tttContainerEl.style.display = 'flex';
tttContainerEl.style.flexWrap = 'wrap';
tttContainerEl.style.position = 'absolute';
tttContainerEl.style.top = '50%';
tttContainerEl.style.left = '50%';
tttContainerEl.style.transform = 'translate(-50%,-50%)';
tttContainerEl.addEventListener('click', handlePlayerAction);

const createGrid = () => {
    Array(9).fill(0).map((cell, idx) => {
        const newCell = document.createElement('div');
        newCell.id = idx;
        newCell.style.width = '100px';
        newCell.style.height = '100px';
        newCell.style.border = '1px solid black';
        newCell.style.textAlign = 'center';
        newCell.style.lineHeight = '100px';
        newCell.style.fontSize = '60px';

        tttContainerEl.appendChild(newCell);

        return null;
    })
}

createGrid();

