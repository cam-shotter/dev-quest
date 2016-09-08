import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/board'

const mapStateToProps = (state) => {
  return { tileGrid: state.tileGrid }
}

const boardConnector = connect(mapStateToProps)(Board)

export default boardConnector
