import React from 'react';

export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const value = this.input.value;
        if(this.props.guess) {
            this.props.guess(value);
        }
        this.input.value = '';
    }

    render() {
        return (
            <form name="guessForm" onSubmit={event => this.onSubmit(event)}>
                <input ref={input => this.input = input} />
                <button type='submit'>Guess</button>
            </form>
        );
    }
}