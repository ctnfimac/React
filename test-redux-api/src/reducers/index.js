import { combineReducers } from 'redux';
import { mostrarPersonajes } from './personajes';

const rootReducer = combineReducers({
    personaje: mostrarPersonajes
});

export default rootReducer;