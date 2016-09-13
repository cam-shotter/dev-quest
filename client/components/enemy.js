import React from 'react'

class Enemy extends React.Component {

  getPresentEnemy() {
    const {enemies, x, y} = this.props
    let presentEnemy = enemies.find( (enemy) => {
      return enemy.position.y==y && enemy.position.x==x
    })
     if (!presentEnemy) {
       presentEnemy = {type: "dead"}
     }
    return presentEnemy
  }

  enemyTypeToRender() {
    const enemyType = this.getPresentEnemy().type
    switch (enemyType){
      case ("ie6"):
        return <div><img src={"./img/enemies/ie6.png"} alt="googlechrome" className="img-enemy" /></div>
      case ("chrome"):
        return <div><img src={"./img/enemies/googleChrome.png"} alt="googlechrome" className="img-enemy" /></div>
      case ("firefox"):
        return <div><img src={"./img/enemies/firefox.png"} alt="firefox" className="img-enemy" /></div>
      case ("safari"):
        return <div><img src={"./img/enemies/Opera.png"} alt="googlechrome" className="img-enemy" /></div>
      default:
        return ""
      }
    }

  render(){
    return (
      <div className='enemy'>
        {this.enemyTypeToRender()}
      </div>
    )
  }
}

export default Enemy
