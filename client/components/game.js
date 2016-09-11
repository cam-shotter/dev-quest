import React from 'react'
import BoardConnector from '../connectors/boardConnector'
import StatsConnector from '../connectors/statsConnector'
import ConsoleLogConnector from '../connectors/consoleLogConnector'

class Game extends React.Component {

  constructor(props){
    super(props)

  }

  isArrowKey(key) {
    return (key == 'ArrowLeft' || key == 'ArrowRight' || key == 'ArrowDown' || key == 'ArrowUp' )
  }

  isPlayerDead() {
    return this.props.player.health <= 0
  }

  componentDidMount() {

    var { enemies, player } = this.props
    var presentEnemy

    //This removes defaults for firefox
    document.addEventListener("keypress", (evt) => {
      if(this.isArrowKey(evt.key)){
        evt.preventDefault()
      }
    })

    //This removes defaults for Chrome
    document.addEventListener("keydown", (evt) => {
        var {y, x} = player.position
        if (this.isArrowKey(evt.key)) {
          evt.preventDefault()
          var newPosition = {x, y}
          switch(evt.key){
            case 'ArrowLeft':
              newPosition = {x:x-1,y:y}
              break;
            case 'ArrowRight':
              newPosition = {x:x+1,y:y}
              break;
            case 'ArrowUp':
              newPosition = {x:x,y:y-1}
              break;
            case 'ArrowDown':
              newPosition = {x:x,y:y+1}
          }
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == newPosition.y && enemy.position.x == newPosition.x)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMove( newPosition.y, newPosition.x )
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
        }
    })
  }

  render(){
    return (
      <div>
        <div className="board-container">
          <BoardConnector />
        </div>
        <div className="ui-container">
          <ConsoleLogConnector />
          <StatsConnector />
        </div>

      </div>
    )
  }
}

export default Game
