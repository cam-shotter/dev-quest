import React from 'react'

class Player extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
    return (
      <div className='player'>
        <span><p>{this.props.player.health}</p></span>
      </div>
    )
  }
}

export default Player
