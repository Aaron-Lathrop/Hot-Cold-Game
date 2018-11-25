import React from 'react';

export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const value = this.input.value;
        if(this.input.value) {
            this.props.guess = value;
        }
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <input ref={input => this.input = input} />
            </form>
        );
    }
}