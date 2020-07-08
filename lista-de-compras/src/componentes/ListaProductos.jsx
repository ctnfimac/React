import React, { Component } from 'react'
import ButtonAdd from './ButtonAdd';
import store from '../store';

class ListaProductos extends Component{

    constructor(){
        super();
        this.state = {
            nombre:"",
            productos: []
        }
    }

    actualizoValorProducto = (e) =>{
        const {value,name} = e.target
        this.setState({
            [name]: value
        })
    }
    
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
               productos: store.getState().productos
            })
        });
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
                                    value= {this.state.nombre}
                                    className= "lista__item--descripcion" 
                                    type= "text" 
                                    name= "nombre"
                                    placeholder= "producto..."
                                    onChange= { this.actualizoValorProducto }
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