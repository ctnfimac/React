import { AGREGO_ITEM_NUEVO, AGREGO_ITEM_A_LISTA_DE_RESUELTOS,
         ACTUALIZAR_VALOR_DEL_ITEM, ELIMINO_ITEM_DEL_CARRITO} from '../actions/productosAction'

const listaDeItemsDefault = {
    listaDeCompras: [],
    listaDeProductosPuestosEnElCarrito: [],
    contador: 0
}

const productos = (state = listaDeItemsDefault, action) =>{
    switch(action.type){
        case AGREGO_ITEM_NUEVO:
            state.contador++;
            action.item.id = state.contador;
            return{
                ...state,
                listaDeCompras: state.listaDeCompras.concat(action.item)
            }
        case AGREGO_ITEM_A_LISTA_DE_RESUELTOS:
            return{
                ...state,
                listaDeProductosPuestosEnElCarrito: state.listaDeProductosPuestosEnElCarrito.concat(action.item),
                listaDeCompras: state.listaDeCompras.filter( producto => producto.id !== action.item.id)
            }
        case ACTUALIZAR_VALOR_DEL_ITEM:
            return{
                ...state,
                listaDeCompras: state.listaDeCompras.map( item => {
                    if( item.id === parseInt(action.item.id)){
                        item.nombre = action.item.nombre
                    }
                    return item
                })
            }
        case ELIMINO_ITEM_DEL_CARRITO:
            return{
                ...state,
                listaDeCompras: state.listaDeCompras.concat(action.item),
                listaDeProductosPuestosEnElCarrito: state.listaDeProductosPuestosEnElCarrito.filter( item => item.id !== action.item.id)
            }
        default:
            return state;
    }
}

export default productos;