import React , {Component} from 'react';

class Message extends Component {   // class héritant de Component
    constructor(){       // initialisation du state
        super();             // appel du constructeur parent
        this.state = {        // définition du state
            message : "Welcome visitor !",
        }
    }
    changeMessage(){         // méthode pour changer le message
        this.setState({
            message : "Thanks for suscribing!" ,
        })
    }
    render(){          // rendu du composant
        return <div>
        <h1>{this.state.message}</h1>
        {/* // appel de la méthode lors du click sur le bouton */}
        <button onClick={()=>this.changeMessage()}>Suscribe</button> 
        </div>
    }
};

export default Message;  // exportation du composant pour être utilisé dans d'autres fichiers
