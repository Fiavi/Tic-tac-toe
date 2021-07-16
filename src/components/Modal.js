import React, { useState, Fragment } from "react";

import "../css/PopUp.css";

const Modal = ({ click, active, getPlayersNames }) => {
    const [playerName, setPlayerName] = useState("");

    const onChange = (event) => {
        const { name, value } = event.target;
        setPlayerName({
            ...playerName,
            [name]: value
        });
    };

    return (
        <Fragment>
            {active ? (
                <div className="modal">
                    <form className="modal-content">
                        <input
                            className="input"
                            type="text"
                            required
                            name="player1"
                            onChange={onChange}
                        />
                        <input
                            className="input"
                            type="text"
                            required
                            name="player2"
                            onChange={onChange}
                        />
                        <button className="btn" type="submit" onClick={click}>
                            Start Game
                        </button>
                    </form>
                </div>
            ) : (
                getPlayersNames(playerName)
            )}
        </Fragment>
    );
};
export default Modal;
