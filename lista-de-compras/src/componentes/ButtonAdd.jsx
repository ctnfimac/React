import React from 'react';
import { useDispatch } from 'react-redux';
import { agregoItemNuevo } from '../redux/actions/productosAction';


const ButtonAdd = () => {
    const dispatch = useDispatch()
    return(
        <button 
            className="btn-agregar"
            onClick={ () => {dispatch(agregoItemNuevo({id:0,nombre:""}))} }
        >
        &#43;
        </button>
    )
}
// const mapDispatchToProps = dispatch => ({
//     agregarProducto(producto){
//         dispatch({
//             type: "AGREGO_ITEM_NUEVO",
//             producto
//         })
//     }
// })

// const mapStateToProps = state => ({

// })

// export default connect(mapStateToProps,mapDispatchToProps)(ButtonAdd);
export default ButtonAdd;