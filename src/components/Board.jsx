import React, { useState, useEffect, Fragment } from "react";
import Square from "./Square";

import "../css/Board.css";

const Board = ({ squares, click, winner, turn, players }) => {
    const [count, setCount] = useState({
        countP1: 0,
        countP2: 0
    })

    const handleCountClick = () => {
        let newCounterValue1 = count.countP1;
        let newCounterValue2 = count.countP2;
        if(winner) {
            if(!turn) {
                newCounterValue1 = count.countP1 + 1
            } else {
                newCounterValue2 = count.countP2 + 1
            }
        }
        setCount({
            countP1: newCounterValue1,
            countP2: newCounterValue2
        })
    }

    const playerScoreBoard = () => {
        return (
            <>
            <div className="players">
                <p>{players.player1} : {count.countP1}</p>
                <p>{players.player2} : {count.countP2}</p>
                <button onClick={handleCountClick}>Add a point to the winner</button>
            </div>
            </>
        )
    }

    return (
        <div className="position">
        <div className="board">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => click(i)} />
            ))}
        </div>
        <div>
            <p className="info">
                {winner ? `Player: ${!turn ? players.player1 : players.player2} has won` : `Turn: ${turn ?  players.player1 : players.player2}`}
            </p>
        </div>
            {playerScoreBoard()}
        </div>
    );
};

export default Board;
