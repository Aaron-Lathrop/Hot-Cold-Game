import React from 'react';
import Header from './Header.js';
import Status from './Status.js';
import Guess from './Guess.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make your Guess!',
            guessList: [],
            secretNumber: Math.floor(Math.random() * 100)
        }
    }

    handleHeader(element) {
        console.log(`this.handleHeader called`);
        console.log(element);
        if(element === "new") {
            this.newGame();
        }
    }

    newGame() {
        this.setState({
            feedback: 'Make your Guess!',
            guessList: [],
            secretNumber: Math.floor(Math.random() * 100)
        });
    }

    giveFeedback(value) {
        let feedback = "";
        const secretNumber = this.state.secretNumber;
        const difference = Math.abs(secretNumber - value);
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
        this.setState({feedback});
    }

    addGuess(guess) {
        this.setState({guessList: [...this.state.guessList, guess]});
    }

    render() {
        return (
            <div>
                <Header onClick={element => this.handleHeader(element)} />
                <Status status={this.state.feedback} />
                <Guess guess={guess => this.giveFeedback(guess)} guessList={this.state.guessList} />
            </div>
        );
    }
}