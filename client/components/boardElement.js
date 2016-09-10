import React from 'react'
import Tile from './tile'
import EnemyConnector from '../connectors/enemyConnector'
import PlayerConnector from '../connectors/playerConnector'

class BoardElement extends React.Component {

//returns the tileType (0, 1, 2 etc) to be given to the Tile as props
  whatIsTileType() {
    const {tileGrid, i, j} = this.props
    const tileType = tileGrid[i][j]
    return tileType
  }

//function returns true only if the current tile (position(i,j)) matches player's (x,y) position
  isPlayerPresent() {
    const {playerPosition, i, j} = this.props
    return i == playerPosition.y && j == playerPosition.x
  }

  isEnemyPresent() {
    const {enemies, i, j} = this.props
    const presentEnemy = enemies.find( (enemy) => {
      return enemy.position.y==i && enemy.position.x==j
    })
    return presentEnemy
  }

  render(){
    return (
      <div className='board-element'>
        <Tile tileType={this.whatIsTileType()} />
        { this.isEnemyPresent() ? <EnemyConnector
            x={this.props.j}
            y={this.props.i}
            />
          : null }
        { this.isPlayerPresent() ? <PlayerConnector /> : null }
      </div>
    )
  }
}

export default BoardElement
