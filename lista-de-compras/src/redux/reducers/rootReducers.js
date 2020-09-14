import {combineReducers} from 'redux';
import productos from './productosReducer';

const rootReducers = combineReducers({
    productos
});

export default rootReducers;