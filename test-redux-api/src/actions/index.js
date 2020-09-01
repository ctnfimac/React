import axios from 'axios';

export const MOSTRAR_PERSONAJES = 'MOSTRAR_PERSONAJES';

export function mostrarPersonajes(){
    return (dispatch, getState) => {
        axios.get('https://api.jikan.moe/v3/search/anime?q=dragon%20ball')
            .then( response => {
                console.log(response.data.results)
                dispatch({ type: MOSTRAR_PERSONAJES, payload:response.data.results})
            })
    }
}