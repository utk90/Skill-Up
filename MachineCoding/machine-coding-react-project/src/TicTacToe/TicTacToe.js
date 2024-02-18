import React, { useEffect } from 'react'
import './TicTacToe.css'

const results = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const TicTacToe = () => {
    let currMove = 'X';
    let countMove = 0;
    let winTimer, drawTimer;

    const playMove = (e) => {
        e.target.innerText = currMove;
        e.target.style.pointerEvents = 'none';
        const player = currMove === 'X' ? 1 : 2;
        checkResults(player);
        toggleMove();
    }

    const toggleMove = () => {
        if (currMove === 'X') currMove = 'O';
        else currMove = 'X';
    }

    const checkResults = (player) => {
        const tttBoxes = document.querySelectorAll('.ttt-box');
        countMove++;
        for (let pattern of results) {
            const val1 = tttBoxes[pattern[0]].innerText;
            const val2 = tttBoxes[pattern[1]].innerText;
            const val3 = tttBoxes[pattern[2]].innerText;

            if (val1 + val2 + val3 === 'XXX' || val1 + val2 + val3 === 'OOO') {
                const gridElement = document.querySelectorAll('.ttt-grid');
                gridElement[0].style.opacity = 0.5;
                gridElement[0].style.pointerEvents = 'none';
                winTimer = setTimeout(() => {
                    if (window.confirm(`Player ${player} won!! 🎉🎉🎉`)) {
                        resetGame();
                    }
                }, 0);
                return;
            } else if (countMove === 9) {
                drawTimer = setTimeout(() => {
                    if (window.confirm(`Match draw!!`)) {
                        resetGame();
                    }
                }, 0);
                return;
            }
        }
    }

    const resetGame = () => {
        const tttBoxes = document.querySelectorAll('.ttt-box');
        const gridElement = document.querySelectorAll('.ttt-grid');
        gridElement[0].style.opacity = 1;
        gridElement[0].style.pointerEvents = '';
        countMove = 0;
        clearTimeout(winTimer);
        clearTimeout(drawTimer);
        for (let tttBox of tttBoxes) {
            tttBox.addEventListener('click', playMove)
            tttBoxes.forEach((box) => {
                box.innerText = '';
                box.style.pointerEvents = '';
            });
        }
    }

    useEffect(() => {
        resetGame();
    }, [])

    return (
        <div className='main-container'>
            <div className="ttt-grid">
                <div className="ttt-box" id="ttt-box-0"></div>
                <div className="ttt-box" id="ttt-box-1"></div>
                <div className="ttt-box" id="ttt-box-2"></div>
                <div className="ttt-box" id="ttt-box-3"></div>
                <div className="ttt-box" id="ttt-box-4"></div>
                <div className="ttt-box" id="ttt-box-5"></div>
                <div className="ttt-box" id="ttt-box-6"></div>
                <div className="ttt-box" id="ttt-box-7"></div>
                <div className="ttt-box" id="ttt-box-8"></div>
            </div>
        </div>
    )
}

export default TicTacToe