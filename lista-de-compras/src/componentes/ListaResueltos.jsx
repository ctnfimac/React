import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eliminoItemDelCarrito } from '../redux/actions/productosAction';

const ListaResueltos = () =>{
    const productos = useSelector((state) => state.productos.listaDeProductosPuestosEnElCarrito );
    const dispatch = useDispatch();
    return(
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
                                onClick= {()=> { dispatch(eliminoItemDelCarrito(producto))}}
                            >
                                &#120;
                            </button>
                        </div>
                    )
                }
            </div>
        </section>  
    )
}

export default ListaResueltos;