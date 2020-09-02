import React , { Component } from 'react'

class Buscador extends Component{

    constructor(){
        super()
        this.state = {
            buscador: ''
        }
    }

    setPalabra = (e) => {
        this.setState({
            buscador: e.target.value
        })
    }

    render(){
        return(
            <React.Fragment>  
                <h2>Buscar Un personaje</h2>
                <input 
                    type="text" 
                    name="buscador" 
                    id="buscador" 
                    onChange= { this.setPalabra }
                    value={ this.state.buscador } 
                    placeholder="Introduce el Personaje..." 
                />
                <ul>
                    <li>Valor1</li>
                    <li>Valor2</li>
                </ul>
            </React.Fragment>  
        )
    }
}



export default Buscador;