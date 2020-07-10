import { createStore } from 'redux'


const estadoInicial = {
    listaDeCompras: [],
    listaDeProductosPuestosEnElCarrito: [],
    contador: 0
}

const reducer = (state = estadoInicial, action) => {

    if(action.type === "AGREGO_ITEM_NUEVO"){
        state.contador++;
        action.producto.id = state.contador;
        return{
            ...state,
            listaDeCompras: state.listaDeCompras.concat(action.producto)
        };
    }

    if(action.type === "ADD_LISTA_RESUELTOS"){
        return{
            ...state,
            listaDeProductosPuestosEnElCarrito: state.listaDeProductosPuestosEnElCarrito.concat(action.producto),
            listaDeCompras: state.listaDeCompras.filter( producto => producto.id !== action.producto.id)
        };
    }

    if(action.type === "ACTUALIZO_VALOR"){
        console.log(action.producto)
        return{
            ...state,
            listaDeCompras: state.listaDeCompras.map( producto => {
                if( producto.id === parseInt(action.producto.id)){
                    producto.nombre = action.producto.nombre
                }
                return producto
            })
        }
    }

    return state;
}




export default createStore(reducer)



