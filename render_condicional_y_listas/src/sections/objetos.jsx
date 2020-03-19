import React from 'react'


const ListaDeObjetos = (props) => (
    <div>
        <h2>Lista De Objetos</h2>
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
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