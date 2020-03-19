import React from 'react'


const ListaDeObjetos = (props) => (
    <div>
        <h2>Lista De Objetos</h2>
        <table Border='1'>
            <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
            <tbody>
                {
                    props.objetos.map( (objeto,index) => <tr key = {index}>
                        <td>{objeto.codigo}</td>
                        <td>{objeto.nombre}</td>
                        <td>{objeto.precio}</td>
                    </tr> )
                }
            </tbody>
        </table>
    </div>
)

export default ListaDeObjetos;