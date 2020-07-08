import React, { Component } from 'react'

class ButtonAdd extends Component{

    constructor(){
        super();
        this.agregarProducto = this.agregarProducto.bind(this)
    }

    agregarProducto(){
        console.log('agregar producto')
    }

    render(){
        return(
            <React.Fragment>
                <button 
                    className="btn-agregar"
                    onClick={ this.agregarProducto()}
                >
                Agregar
                </button>
            </React.Fragment>
        )
    }
}

export default ButtonAdd;