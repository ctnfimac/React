import React from 'react'
import ButtonAdd from './ButtonAdd';
import { useSelector, useDispatch } from 'react-redux';
import { actualizarValorDelItem, agregoItemAlistaDeResueltos } from '../redux/actions/productosAction' 

const ListaProductos = () => {
    const productos = useSelector((state) => state.productos.listaDeCompras );
    const dispatch = useDispatch();
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
                            onChange={(e)=>  {dispatch(actualizarValorDelItem({id: e.target.id, nombre: e.target.value}))}}
                        />
                        <button
                            onClick= {()=> {dispatch(agregoItemAlistaDeResueltos(producto))}} 
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

export default ListaProductos;