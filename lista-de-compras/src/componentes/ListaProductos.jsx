import React, { Component } from 'react'
import ButtonAdd from './ButtonAdd';
import store from '../store';

class ListaProductos extends Component{

    constructor(){
        super();
        this.state = {
            nombre:[], // [{id:1, nombre:"asa"},{id:2, nombre:"sarten"}]
            productos: []
        }
    }

    actualizoValorProducto = (e) =>{
        let producto = {
           id: e.target.id,
           nombre: e.target.value
        }
        store.dispatch({
            type: "ACTUALIZO_VALOR",
            producto  
        })
    }
    
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
               productos: store.getState().listaDeCompras
            })
        });
    }
   
    productoEncontrado = (producto) =>{
        store.dispatch({
            type: "ADD_LISTA_RESUELTOS",
            producto
        })
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
                                    name= "nombre"
                                    placeholder= "producto..."
                                    id= {producto.id}
                                    onChange= { this.actualizoValorProducto }
                                />
                                <button
                                    onClick= { () => this.productoEncontrado(producto)} 
                                    className="lista__item--Accion"
                                >
                                    Listo
                                </button>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>  
        );
    }
}

export default ListaProductos;