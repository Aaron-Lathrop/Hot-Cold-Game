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
        if(value && value === secretNumber) {
                feedback = "Winner winner chicken dinner!!!";
                this.addGuess(value);
            } else if(!value || value > 100 || value < 0) {
                feedback = "Please guess a number between 0 and 100";
                alert(feedback);
            } else if(difference< 10){
                feedback = "Hot";
                this.addGuess(value);
            } else if(difference > 9 && difference < 20) {
                feedback = "Kinda hot";
                this.addGuess(value);
            } else if(difference > 19 && difference < 30){
                feedback = "Luke warm";
                this.addGuess(value);
            } else {
                feedback = "Cold";
                this.addGuess(value);
            }
        return feedback;
    }

    addGuess(guess) {
        console.log('addGuess ran');
        console.log(`${guess}`);
        console.log(`${this.state.guessList}`);
        this.setState({guessList: [...this.state.guessList, guess]});
        console.log(`${this.state.guessList}`);
    }

    render() {
        return (
            <div>
                <Header />
                <Status />
                <Guess guess={guess => this.giveFeedback(guess)} guessList={this.state.guessList} />
            </div>
        );
    }
}