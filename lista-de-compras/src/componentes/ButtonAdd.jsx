import React, { Component } from 'react'
import store from '../store';

class ButtonAdd extends Component{

    agregarProducto = (producto) => {
        store.dispatch({
            type: "AGREGO_ITEM_NUEVO",
            producto
        })
    }

    render(){
        return(
            <React.Fragment>
                <button 
                    className="btn-agregar"
                    onClick={() => this.agregarProducto({id:0,nombre:""})}
                >
                &#43;
                </button>
            </React.Fragment>
        )
    }
}

export default ButtonAdd;