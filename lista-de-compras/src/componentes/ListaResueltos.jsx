import React from 'react';
import { connect } from 'react-redux';


const ListaResueltos = ({productos, eliminarDeResueltos}) =>(
    <section>  
        {productos.length > 0 ? <h2 className="titulo">Encontrados</h2> : ""}   
        <div className="lista">
            {
                productos.map( producto =>
                    <div className="lista__item" key= {producto.id}>
                        <input 
                            value= {producto.nombre}
                            className= "lista__item--descripcion" 
                            type= "text" 
                            placeholder= "producto..."
                            disabled
                        />
                        <button 
                            className="lista__item--Accion"
                            onClick= {()=>eliminarDeResueltos(producto)}
                        >
                            &#120;
                        </button>
                    </div>
                )
            }
        </div>
    </section>  
)


const mapStateToProps = state => ({
    productos: state.listaDeProductosPuestosEnElCarrito
}) 

const mapDispatchToProps = dispatch => ({
    eliminarDeResueltos(producto){
        dispatch({
            type: "ELIMINAR_PRODUCTO_DE_CARRITO",
            producto
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListaResueltos);