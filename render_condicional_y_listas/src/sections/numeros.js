import React from 'react'


const ListaDeNumeros = (props) =>(
    <div>
        <h2>Lista de numeros</h2>
        <ul>
            {  
                props.numeros.map( (numero, i) => <li key = {i}>Item Número {numero}</li>)
            } 
        </ul>
    </div>  
)


export default ListaDeNumeros;