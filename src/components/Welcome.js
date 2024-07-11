import React , {Component} from 'react';

// class Welcome extends Component {    // Création d'une classe qui hérite de Component
// render(){
//     return <div>
//     <h1>Welcome {this.props.name} vous avez {this.props.age}</h1>
//     {this.props.children}
//     </div>
// }
// }

//2eme façon de faire

class Welcome extends Component {
    render(){
        const {name , age , children} = this.props ;

        return (<div>
            <p> Welcome {name} vous avez {age}</p>
            {children}
        </div>
        )
    }
}
export default Welcome;    // Exporter la classe Welcome pour qu'elle puisse être utilisée ailleurs