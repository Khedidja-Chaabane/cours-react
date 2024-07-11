import React, { Component } from 'react'

class ClassClick extends Component {

clickHandler(){
    console.log('ClassClick was clicked');
  
}
  render() {
    return (
      <div><button onClick={this.clickHandler}>Click me class !</button></div>
    )
  }
}

export default ClassClick