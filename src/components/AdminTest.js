import React, { Component } from 'react'

class AdminTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAdmin : false // je change cette valeur à true si je veux activer ma premiere condition soit afficher le bouton edit
      }
    }

  render() {

    //variable intermediaire
    // let message ;
    // if (this.state.isAdmin) {
    //     message =<div><button>Edit</button></div> 
    // } 
    // else {
    //     message = <div> <h2>Veuillez vous connecter en tant que administrateur! </h2> </div>
    // }
    // return <div>{message} </div>


    // ternaire
    return this.state.isAdmin? <div><button>Edit</button></div> : <div><h2>Veuillez vous connecter en tant que administrateur! </h2></div>
  }
}

export default AdminTest