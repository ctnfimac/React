import React, { Component } from 'react'
import ButtonAdd from './ButtonAdd';

class ListaProductos extends Component{

    constructor(){
        super();
        this.state = {
            productos: [
                { id: 1, nombre: "Galletitas"}
            ]
        }
    }

    render(){
        return(
            <React.Fragment>  
            <ButtonAdd />
            <div className="lista">
                <h2>Productos</h2>
                {
                    this.state.productos.map( producto =>
                        <div className="lista__item" key= {producto.id}>
                            <input 
                                value= {producto.nombre}
                                className= "lista__item--descripcion" 
                                type= "text" 
                                placeholder= "producto..."
                            />
                            <button className="lista__item--Accion">Listo</button>
                        </div>
                    )
                }
            </div>
            </React.Fragment>  
        );
    }
}

export default ListaProductos;