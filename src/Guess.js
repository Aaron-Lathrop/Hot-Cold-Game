import React from 'react';
import GuessForm from './GuessForm.js';
import GuessList from './GuessList.js';

export default function Guess(props) {
    return (
        <div>
            <GuessForm guess={props.onSubmit} />
            <GuessList guessList={props.guessList} />
        </div>
    );
}