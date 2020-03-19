import React from 'react'


const ListaDeNumeros = (props) =>(
    <ul>
        {  
            props.numeros.map( numero => <li>Item Número {numero}</li>)
        } 
    </ul>
)


export default ListaDeNumeros;