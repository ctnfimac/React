export const AGREGO_ITEM_NUEVO = 'AGREGO_ITEM_NUEVO'
export const agregoItemNuevo = (item) => {
    return{
        type: AGREGO_ITEM_NUEVO,
        item: item
    }
}

export const ELIMINO_ITEM_DEL_CARRITO = 'ELIMINO_ITEM_DEL_CARRITO';
export const eliminoItemDelCarrito = (item) =>{
    return{
        type: ELIMINO_ITEM_DEL_CARRITO,
        item: item
    }
}

export const AGREGO_ITEM_A_LISTA_DE_RESUELTOS = 'AGREGO_ITEM_A_LISTA_DE_RESUELTOS'
export const agregoItemAlistaDeResueltos = (item) =>{
    return{
        type: AGREGO_ITEM_A_LISTA_DE_RESUELTOS,
        item: item
    }
}

export const ACTUALIZAR_VALOR_DEL_ITEM = 'ACTUALIZAR_VALOR_DEL_ITEM';
export const actualizarValorDelItem = (item) =>{
    return{
        type: ACTUALIZAR_VALOR_DEL_ITEM,
        item: item
    }
}