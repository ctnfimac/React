import React from 'react'
import ButtonAdd from './ButtonAdd';
import { connect } from 'react-redux';

const ListaProductos = ({productos, actualizoValorProducto, productoEncontrado}) => {

    let valor = productos.length > 0 ? <h2 className="titulo">Productos</h2> : "";
    return(
    <section>  
        <ButtonAdd />
        {valor}            
        <div className="lista">
            {
                productos.map( producto =>
                    <div className="lista__item" key= {producto.id}>
                        <input 
                            value= {producto.nombre}
                            className= "lista__item--descripcion" 
                            type= "text" 
                            name= "nombre"
                            placeholder= "Agregue un nombre"
                            id= {producto.id}
                            onChange={(e)=> actualizoValorProducto(e) }
                        />
                        <button
                            onClick= {()=> productoEncontrado(producto)} 
                            className="lista__item--Accion"
                        >
                            &#10004;
                        </button>
                    </div>
                )
            }
        </div>
    </section> 
)}

const mapStateToProps = state => ({
    productos: state.listaDeCompras
})

const mapDispatchToProps = dispatch => ({
    actualizoValorProducto(e){
        let producto = {
           id: e.target.id,
           nombre: e.target.value
        }
        dispatch({
            type: "ACTUALIZO_VALOR",
            producto  
        })
    },
    productoEncontrado(producto){
        dispatch({
            type: "ADD_LISTA_RESUELTOS",
            producto
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos);