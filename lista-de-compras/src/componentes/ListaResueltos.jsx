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
        let valor= ""
        if(this.state.productos.length > 0){
            valor =  <h2 className="titulo">Encontrados</h2>
        }
        return(
            <section>  
            {valor}   
            <div className="lista">
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
            </section>  
        );
    }
}


export default ListaResueltos;