import React from 'react'

class ConsoleLog extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
    return (
      <div className='ui-consoleLog'>
        <h3>This is rendered by consoleLog</h3>
        {this.props.loggedMessages[0].content}
      </div>
    )
  }
}

export default ConsoleLog
