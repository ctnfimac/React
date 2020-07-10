import React, { Component } from 'react'
import store from '../store';


class ListaResueltos extends Component{


    constructor(){
        super();
        this.state = {
            productos: []
                // { id: 1, nombre: "Galletitas"}
            // ]
        }
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
               productos: store.getState().listaDeProductosPuestosEnElCarrito
            })
        });
    }

    render(){
        return(
            <div className="lista">
            <h2>Encontrados</h2>
            {
                this.state.productos.map( producto =>
                    <div className="lista__item" key= {producto.id}>
                        <input 
                            value= {producto.nombre}
                            className= "lista__item--descripcion" 
                            type= "text" 
                            placeholder= "producto..."
                            disabled
                        />
                        {/* <button className="lista__item--Accion">Eliminar</button> */}
                    </div>
                )
            }
        </div>
        );
    }
}


export default ListaResueltos;