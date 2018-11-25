import React from 'react';
import GuessForm from './GuessForm.js';
import GuessList from './GuessList.js';
import './Guess.css';

export default function Guess(props) {
    return (
        <div className="guess">
            <GuessForm className="guessForm" guess={props.guess} />
            <GuessList className="guessList" guessList={props.guessList} />
            <h2>Guess #{props.guessList.length}</h2>
        </div>
    );
}