import React from 'react';

export default function GuessList(props) {
    const guessList = props.guessList.map((guess) => `#${guess}, `);

    return (
        <div>
            {guessList}
        </div>
    );
}