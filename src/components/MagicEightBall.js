import React, { Component } from 'react';
import styles from './MagicEightBall.module.css';
// import ReactDOM from 'react-dom';

const inputStyle = {
    color: 'purple',
    textAlign: 'center'
}

class MagicEightBall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            randomIndex: ''
        }
    }

    ask = (event) => {
        
        if(this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            })
            
        } 
        console.log(this.state.userInput)
        console.log(this.state.randomIndex);
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })

    }

    //Goddamn it, it took me hours to figure out how to get the enter button to trigger the button without using a mouse to click the button. All I had to fucking do was call the ask function (method?) in the the handleKeyPress() if the event.key is === 'Enter'
    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.ask();
            console.log(event.key)
            event.preventDefault()
          }
          
    }  


    

    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
          ];
          const answer = possibleAnswers[this.state.randomIndex]; 

    return (
      <div className={styles.main}>
        <input
          type="text"
          className='form-control input-lg'
          id='mainInput'
          placeholder='Ask Away!'
          value={this.state.userInput}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          style={inputStyle}
        />
          
          <br />
        <button 
          className='btn primary btn-info btn-lg'
          onClick={this.ask}
          type='submit'
          >
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        {/* I can't belive I made this work, I wanted to add an '!' but I was getting an answer as undefined on my page this fixed that issue*/}
        <p className={styles.answer}>{answer ? answer + '!' : null}</p>
      </div>
    );
      
    }
}


export default MagicEightBall;