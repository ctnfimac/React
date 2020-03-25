import React, {Component} from 'react';


class Inicio extends Component{

    constructor(props){
        super(props)
        this.state = {
            personas : {}
        }
        this._renderAll = this._renderAll.bind(this)
    }

    getAll = () =>{
        fetch('http://127.0.0.1:5000/persona')
            .then( res => res.json())
            .then( data => {
                const { personas } = data
                this.setState(
                    { personas }
                )
            })
    } 

    _renderAll(){ 
       if(Object.keys(this.state.personas).length !== 0){
        let contenido =  this.state.personas.map(persona =>(
                <tr key = {persona.codigo}>
                    <td>{persona.codigo}</td>
                    <td>{persona.nombre}</td>
                    <td>{persona.apellido}</td>
                    <td>{this._fechaFormat(persona.fecha_nacimiento)}</td>
                </tr>
               )
            )
        return this._armarTabla(contenido)
       }
    }

    _fechaFormat(date){
        let fecha = new Date(date)
        return parseInt(fecha.getFullYear()+ 1) + '-'+ parseInt(fecha.getMonth()+ 1)  + '-' + parseInt(fecha.getDay()+ 1) 
    }

    _armarTabla(contenido){
        return  <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nacimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contenido}
                    </tbody>
                </table>
    }

    render(){
        console.log('render()')
        return(
            <section className="api mt-5" id="api">
                <div className="container">
                    <div className="row justify-content-center">
                    <h4 className="mb-4 col-sm-12 text-center text-secondary">Traer registros de la tabla Personas</h4>
                        <div className="mb-4 bg-dark col-sm-12 col-md-8 border border-light">
                            <div className="pl-5 pr-5 pt-4">
                                <div className="opcion">
                                    <button id="traerPersonas" className="btn btn-md btn-success" type="submit" onClick = { this.getAll }>Petición</button>
                                    <p className="text-left pt-3 text-white">Obtiene toda la información de las personas guardadas</p>
                                </div>
                                <div id="rta_traerPersonas" className="table-responsive" >
                                    { this._renderAll() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
        
export default Inicio;