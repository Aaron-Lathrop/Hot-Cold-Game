import React from 'react';
import Header from './Header.js';
import Status from './Status.js';
import Guess from './Guess.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
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
        console.log(`the secret number is: (${secretNumber})`);
        console.log(`the guess is: (${value})`);
        console.log(`the difference is: (${difference})`);
        if(value && difference === 0) {
                feedback = "Winner winner chicken dinner!!!";
                this.addGuess(value);
            } else if(!value || value > 100 || value < 0) {
                feedback = "Please guess a number between 0 and 100";
                alert(feedback);
            } else if(difference < 10){
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
        
        console.log(feedback);
        this.setState({feedback});
        console.log(this.state.feedback);
    }

    addGuess(guess) {
        this.setState({guessList: [...this.state.guessList, guess]});
    }

    render() {
        return (
            <div>
                <Header />
                <Status status={this.state.feedback} />
                <Guess guess={guess => this.giveFeedback(guess)} guessList={this.state.guessList} />
            </div>
        );
    }
}