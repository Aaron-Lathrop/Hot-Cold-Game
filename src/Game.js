import React from 'react';
import Header from './Header.js';
import Status from './Status.js';
import Guess from './Guess.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessList: [],
            secretNumber: Math.floor(Math.random() * 100)
        }
    }

    newGame() {
        this.setState({secretNumber: Math.floor(Math.random() * 100)});
    }

    giveFeedback(value) {
        let feedback = "";
        const secretNumber = this.state.secretNumber;
        const difference = Math.abs(secretNumber - value);
        if(value === secretNumber) {
                feedback = "Winner winner chicken dinner!!!";
            } else if(value === undefined || value > 100 || value < 0) {
                feedback = "Please guess a number between 0 and 100";
            } else if(difference< 10){
                feedback = "Hot";
            } else if(difference > 9 && difference < 20) {
                feedback = "Kinda hot";
            } else if(difference > 19 && difference < 30){
                feedback = "Luke warm";
            } else {
                feedback = "Cold";
            }
        return feedback;
    }

    addGuess(guess) {
        this.setState({...this.state.guessList, guess});
    }

    render() {
        return (
            <div>
                <Header />
                <Status />
                <Guess guess={guess => this.addGuess(guess)} />
            </div>
        );
    }
}