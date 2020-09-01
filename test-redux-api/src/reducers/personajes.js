import { MOSTRAR_PERSONAJES } from '../actions';

const initialState = {
    list: []
}


export function mostrarPersonajes(state = initialState, action){
    switch(action.type){
        case MOSTRAR_PERSONAJES:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state;
    }
}