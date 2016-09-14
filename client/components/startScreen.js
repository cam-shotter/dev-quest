import React from 'react'

const players = require('../players/players')

class StartScreen extends React.Component {

  render(){

    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h1>Dev Quest 2.0</h1>
          <h2>The path to coding mastery is fraught with trials and danger.
            It will take all of your determination, skill, and coffee to achieve greatness.</h2>
          <h2>Are you ready to begin your journey as a junior dev?</h2>
        </div>

        <div className="new-player-class">
          <div className="class-info"  onClick={ () => this.props.startGame(players.JavaScript) }>
            <div className="class-picture">
              <img src="./img/player/player.gif" alt="JavaScript" className="class-img" />
            </div>
            <div className="class-starting-stats">
              <h3>Beginner Stats</h3>
              <h5>Wellbeing: 50</h5>
              <h5>Attack: 2</h5>
              <h5>Laptop Charge: 100%</h5>
            </div>
            <button className="start-game-button" >
                    Code in JavaScript
            </button>
          </div>
        </div>

        <div className="new-player-class">
          <div className="class-info" onClick={ () => this.props.startGame(players.Ruby) }>
            <div className="class-picture">
              <img src="./img/player/ruby.gif" alt="Ruby" className="class-img" />
            </div>
            <div className="class-starting-stats">
              <h3>Beginner Stats</h3>
              <h5>Wellbeing: 80</h5>
              <h5>Attack: 1</h5>
              <h5>Laptop Charge: 100%</h5>
            </div>
            <button className="start-game-button" >
                    Code in Ruby
            </button>
          </div>
        </div>

        <div className="new-player-class">
          <div className="class-info" onClick={ () => this.props.startGame(players.Python) }>
            <div className="class-picture">
              <img src="./img/player/python.gif" alt="Python" className="class-img" />
            </div>
            <div className="class-starting-stats">
              <h3>Beginner Stats</h3>
              <h5>Wellbeing: 40</h5>
              <h5>Attack: 3</h5>
              <h5>Laptop Charge: 100%</h5>
            </div>
            <button className="start-game-button" >
                    Code in Python
            </button>
          </div>
        </div>

      </div>
    )
  }
}

export default StartScreen
