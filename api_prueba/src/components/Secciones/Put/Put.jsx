import React, { Component } from 'react'


class Put extends Component{

    constructor(){
        super()
        this.state = {
            codigo: '',
            nombre: '',
            apellido:'',
            fecha_nacimiento: ''
        }
    }

    getPersona = () => {
        fetch('http://localhost:5000/personadata/'+this.state.codigo)
            .then(res => res.json())
            .then(data =>{
                console.log(data.persona[0].apellido)
                let fecha = new Date(data.persona[0].fecha_nacimiento)
                let fecha_format = parseInt(fecha.getDay()+ 1) + '-' + parseInt(fecha.getMonth()+ 1)  + '-' + parseInt( fecha.getFullYear()+ 1) 
                this.setState({
                    nombre: data.persona[0].nombre,
                    apellido: data.persona[0].apellido,
                    fecha_nacimiento: fecha_format
                })
                document.getElementById('modificar').style.display = "block";
                document.getElementById('idModificarPersona').disabled = true;    
            })
        // console.log('codigo: ', codigo)
    }

    updatePersona = () =>{
        let personaModificada = {
            "nombre": this.state.nombre,
            "apellido": this.state.apellido,
            "fecha_nacimiento": this.state.fecha_nacimiento
        }

        fetch('http://127.0.0.1:5000/persona/'+this.state.codigo,{
            method: 'PUT',
            body: JSON.stringify(personaModificada),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('updated:', response)
            document.getElementById('rta_modificarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-success">'
                    +'<strong>Se modifico la persona correctamente</strong>'
                    +'</div>';
            // document.getElementById('upd_codigo').value = null;
            // document.getElementById('upd_nombre').value = null;
            // document.getElementById('upd_apellido').value = null;
            // document.getElementById('upd_nacimiento').value = null;
            this.setState({
                codigo: '',
                nombre: '',
                apellido:'',
                fecha_nacimiento: ''
            })
            document.getElementById('modificar').style.display = "none";
            document.getElementById('idModificarPersona').disabled = false;  
        });
    }

    _fechaFormat(date){
        let fecha = new Date(date)
        return parseInt(fecha.getFullYear()+ 1) + '-'+ parseInt(fecha.getMonth()+ 1)  + '-' + parseInt(fecha.getDay()+ 1) 
    }

    render(){
        return(
            <section className="api mt-5" id="api">
                <div className="container">
                    <div className="row justify-content-center">
                        <h4 className="mb-4 col-sm-12 text-center text-secondary">Modificar un Registro de la tabla Personas</h4>
                        <div className="mb-4 bg-dark col-sm-12 col-md-6 pb-3 pt-3 border border-light">
                            <div className="justify-content-md-between pl-3 pt-4">
                                <div className="opcion">
                                    <div className="input-group mb-5">
                                        <div className="input-group-prepend">
                                            <button 
                                                id="mostrar" 
                                                className="btn btn-success" 
                                                type="button"
                                                onClick= { this.getPersona } 
                                            >
                                                Ver Persona
                                            </button>
                                        </div>
                                        <input 
                                            id="idModificarPersona" 
                                            type="text" 
                                            className="form-control col-4"  
                                            placeholder="Codigo"
                                            value = { this.state.codigo}
                                            onChange = { e => this.setState({ codigo: e.target.value})}
                                        />
                                    </div>  
                                </div>
                                <form>
                                    <input type="hidden" className="form-control" id="upd_codigo" />
                                    <div className="form-group row">
                                        <label htmlFor="nombre" className="col-sm-3 col-form-label text-white">Nombre:</label>
                                        <div className="col-sm-8">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="upd_nombre"
                                            value = { this.state.nombre}
                                            onChange= { e => this.setState({nombre: e.target.value})} 
                                        />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="apellido" className="col-sm-3 col-form-label text-white">Apellido:</label>
                                        <div className="col-sm-8">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="upd_apellido"
                                            value = { this.state.apellido}
                                            onChange= { e => this.setState({apellido: e.target.value})} 
                                        />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="nacimiento" className="col-sm-3 col-form-label text-white">Nacimiento:</label>
                                        <div className="col-sm-8">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="upd_nacimiento" 
                                            value = { this.state.fecha_nacimiento}
                                            onChange= { e => this.setState({fecha_nacimiento: e.target.value})} 
                                        />
                                        </div>
                                    </div>
                                </form>
                                <div className="form-group row">
                                        <div className="col-sm-10">
                                            <button 
                                                className="btn btn-primary" 
                                                id="modificar"
                                                onClick= { this.updatePersona }
                                            >
                                                Modificar
                                            </button>
                                        </div>
                                    </div>
                                <div id="rta_modificarPersona" className="table-responsive" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Put;