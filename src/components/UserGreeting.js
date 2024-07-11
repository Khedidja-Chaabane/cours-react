import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = { // Initialisation du state
         isLoggedIn: false ,
        // message : "Welcome visitor !",
      }
    }
    connectMessage(){ // Méthode pour changer le message et se connecter
       
        this.setState({  // Modification du state
            isLoggedIn: true ,
            //message : "Welcome User !"
           
        })
    }
  render() {
    //Conditionnel rendu pour afficher le message de bienvenue en fonction de l'état de connexion
//      if(this.state.isLoggedIn)
//         return <div><h3>{this.state.message}</h3></div>
//     else
//     return (<div>
//         <h3>{this.state.message}</h3>
//         <button onClick={()=>this.connectMessage()}>Se connecter</button>
//         </div>)


  // les opérateurs ternaires sont utilisés pour simplifier le code
  //je reprends le code ci-dessus pour rendre le code plus concis et clair en l'écrivant de cette façon
// return this.state.isLoggedIn ? <div><h3>{this.state.message}</h3></div> : (<div><h3>{this.state.message}</h3>
// <button onClick={()=>this.connectMessage()}>Se connecter</button> 
// </div>)

// Opérateur circuit court
// applique seulement une seule condition
// return this.state.isLoggedIn && <div><h3>{this.state.message}</h3></div>  // renvoie le composant si isLoggedIn est true, sinon renvoie rien

//avec une variable intermédiaire
let message ;
if (this.state.isLoggedIn) {
    message =<div><h3>Welcome User ! </h3></div> 
} 
else {
    message = <div> <h3>Welcome visitor! </h3> <button onClick={()=>this.connectMessage()}>Se connecter</button> </div>
}
return <div>{message} </div>
}
}
export default UserGreeting