import React, { Fragment, useState } from "react";
import Board from "./Board";
import Modal from "./Modal";

import { calculateWinner } from "../helper";

import "../css/Game.css";

const Game = () => {
    const [ board, setBoard ] = useState(Array(9).fill(null));
    const [ turnPlayerX, setTurnPlayerX ] = useState(true);
    const winner = calculateWinner(board);

    const [modalActive, setModalActive] = useState(true);
    const [players, getPlayers] = useState("");
    
    const getPlayersHandler = (names) => {
        getPlayers(names);
    };

    const renderModal = () => {
        setModalActive(false);
    };

    

    const handleClick = (i) => {
        const copyBoard = [...board];
        if (winner || copyBoard[i]) return;
        copyBoard[i] = turnPlayerX ? "X" : "O";
        setBoard(copyBoard);
        setTurnPlayerX(!turnPlayerX);
    };

    return (
        <Fragment>


        <div className="game">
        <button className="btnStart" onClick={() => setBoard(Array(9).fill(null))}>New game</button>
            <Board squares={board} click={handleClick} winner={winner} turn={turnPlayerX} players={players}/>
        </div>
        <Modal click={renderModal} active={modalActive} getPlayersNames={getPlayersHandler} />
        </Fragment>
    );
};

export default Game;
