import React, { Component} from 'react'

class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesión</button>
    }
}


class LogoutButton extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido</p>
                <button>Salir</button>
            </div>
        )
    }
}


function useConditionalRendering(mostrarA){
    return (mostrarA === true) ? <LoginButton /> : <LogoutButton />
}

export default class ConditionalSection extends Component{
    constructor(props){
        super(props)
        this.state = {
            isUserLogged: props.estado
        }
    }

    render(){
        return(
            <div>
                <h4>Condicion</h4>
                { useConditionalRendering(this.state.isUserLogged)}
            </div>
        )
    }
}