import React from 'react';
import Header from './Header.js';
import Status from './Status.js';
import Guess from './Guess.js';
import './Game.css';

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
        if (element === "new") {
            this.newGame();
        } else if (element === 'about') {
            this.about();
        }
    }

    newGame() {
        this.setState({
            feedback: 'Make your Guess!',
            guessList: [],
            secretNumber: Math.floor(Math.random() * 100)
        });
    }

    about() {
        alert("This is a guessing game where you guess a number from 0 - 100. You'll be told 'hot' if you are close to the secret number and 'cold' if you are far from the secret number. Click '+ NEW GAME' in the upper-right corner to start a new game. Have fun!");
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
            <div className="game">
                <Header onClick={element => this.handleHeader(element)} />
                <Status status={this.state.feedback} />
                <Guess guess={guess => this.giveFeedback(guess)} guessList={this.state.guessList} />
            </div>
        );
    }
}