import React, { Component } from 'react'

class Get extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : {}
        }
        this._renderAll = this._renderAll.bind(this)
    }

    getPersona = () => {
        let codigo = document.getElementById('codigo').value
        fetch('http://localhost:5000/personadata/'+codigo)
            .then(res => res.json())
            .then(data =>{
                this.setState({data})
            })
        console.log('codigo: ', codigo)
    }

    _renderAll(){ 
        if(Object.keys(this.state.data).length !== 0){
         let contenido =  this.state.data.persona.map(persona =>(
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
        return(
            <section className="api mt-5" id="api">
            <div className="container">
                <div className="row justify-content-center">
                   <h4 className="mb-4 col-sm-12 text-center text-secondary">Traer un Registro de la tabla data</h4>
                   <div className="mb-4 bg-dark col-sm-12 col-md-8 border border-light">
                        <div className="d-lg-flex justify-content-md-between pl-3 pr-5 pt-4">
                            <div className="opcion">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button id="traerPersona" className="btn btn-success" type="button" onClick= { this.getPersona }>Traer Persona</button>
                                    </div>
                                    <input id="codigo" type="text" className="form-control" placeholder="Código" />
                                </div>  
                                <p className="text-left pt-3 text-white">Obtiene una persona según el código que se ingrese</p>
                            </div>
                            <div id="rta_traerPersona" className="table-responsive ml-5" >
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

export default Get;