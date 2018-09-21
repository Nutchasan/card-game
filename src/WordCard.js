import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]

        console.log("guess : " + guess.join('').toString())
        console.log("chars : " + this.state.chars.join('').toString())
        console.log("word : " + this.state.word)
        

        this.setState({guess})
        
        if(guess.length === this.state.chars.length){
            if(guess.join('').toString() === this.state.chars.join('').toString()){
                console.log("YES!!!")
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                console.log("NOPE!!!")
            }
        }
        
    }

    render() {
        return (
            <div className="App">
                { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt} activationHandler={this.activationHandler} />) }

                <h1 class="center">{this.state.completed? 'true' : 'false'}</h1>
            </div>
        );
    }
}

