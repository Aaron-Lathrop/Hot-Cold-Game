import React from 'react';

export default function GuessList(props) {
    const guessList = props.guessList.map((guess) => `${guess}, `);

    const guesses = guessList.map(guess => {
       return (<span className="guessListItem">{guess}</span>);
    });

    return (
        <div className="guessList">
            {guesses}
        </div>
    );
}