import { createStore } from 'redux'


const reducer = (state, action) => {

    // esto es para que cada item tenga un id distinto
    if(action.producto != null){
        action.producto.id = state.productos.length + 1
        // TODO: pulir valores regresados. obtengo el maximo valor del id actual, conviene usar esto
        console.log('max:',Math.max.apply( Math, state.productos.map(function(o) { return o.id; })) )
    }

    
   
    if(action.type === "AGREGO_ITEM_NUEVO"){
        return{
            ...state,
            productos: state.productos.concat(action.producto)
        };
    }
    return state;
}




export default createStore( reducer , { productos: [] })



