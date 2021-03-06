import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMove, playerWait} from '../actions/playerMovement'
import {playerAttack} from '../actions/playerActions'
import {allEnemiesAct} from '../actions/enemyActions'
import {loseGame, winGame} from '../actions/gameRunning'
import {pickUpItem} from '../actions/pickUpItem'
import {triggerGotcha} from '../actions/gotchaActions'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    player: state.player,
    items: state.items,
    gotchas: state.gotchas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerMove: (y, x) => {dispatch(playerMove(y, x)) },
    playerWait: () => {dispatch(playerWait())},
    playerAttack: (enemy) => {dispatch(playerAttack(enemy)) },
    pickUpItem: (item) => {dispatch(pickUpItem(item))},
    triggerGotcha: (gotcha) => {dispatch(triggerGotcha(gotcha))},
    winGame: () => {dispatch(winGame())},
    allEnemiesAct: () => {dispatch(allEnemiesAct()) },
    loseGame: () => {dispatch(loseGame())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
