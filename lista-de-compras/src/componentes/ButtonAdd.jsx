import React from 'react';
import { connect } from 'react-redux';


const ButtonAdd = ({agregarProducto}) => (
    <button 
        className="btn-agregar"
        onClick={() => agregarProducto({id:0,nombre:""})}
    >
    &#43;
    </button>
)

const mapDispatchToProps = dispatch => ({
    agregarProducto(producto){
        dispatch({
            type: "AGREGO_ITEM_NUEVO",
            producto
        })
    }
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(ButtonAdd);