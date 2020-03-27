import React, { Component } from 'react'


class Post extends Component{

    constructor(){
        super()
        this.state = {
            codigo: '',
            nombre: '',
            apellido:'',
            fecha_nacimiento: 'dd-mm-aaaa'
        }
    }

    personaSubmit =(e) =>{
        e.preventDefault()

        fetch('http://127.0.0.1:5000/person',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
        }
        })
        .then( response => response.json())
        .catch(function(error) {
            console.log('Hubo un problema con la petición, ' + error.message);
            document.getElementById('rta_personaSubmit').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Error al intentar ingresar una nueva persona</strong>'
                +'</div>'
        })
        .then(response => console.log('Success:', response));
    }
    
    render(){
        return(
            <section className="api mt-5" id="api">
                <div className="container">
                    <div className="row justify-content-center">
                        <h4 className="mb-4 col-sm-12 text-center text-secondary">Agregar un registro a la tabla Personas</h4>
                        <div className="mb-4 bg-dark col-sm-12 col-md-6 pb-3 border border-light">
                            <div className="justify-content-md-between pt-4">     
                                <form onSubmit={ this.personaSubmit }>
                                <div className="opcion">
                                    <div className="input-group mb-4">
                                        <button id="agregar" className="btn btn-success" type="submit">Agregar Persona</button>
                                    </div>  
                                </div>
                                    <div className="form-group row">
                                        <label htmlFor="codigo" className="col-sm-3 col-form-label text-white">Código:</label>
                                        <div className="col-sm-8">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="add_codigo" 
                                                onChange = { e => this.setState({codigo:e.target.value})}
                                                value = {this.state.codigo}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="nombre" className="col-sm-3 col-form-label text-white">Nombre:</label>
                                        <div className="col-sm-8">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="add_nombre"
                                                onChange = { e => this.setState({nombre:e.target.value})}
                                                value = {this.state.nombre} 
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="apellido" className="col-sm-3 col-form-label text-white">Apellido:</label>
                                        <div className="col-sm-8">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="add_apellido"
                                                onChange = { e => this.setState({apellido:e.target.value})}
                                                value = {this.state.apellido} 
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="nacimiento" className="col-sm-3 col-form-label text-white">Nacimiento:</label>
                                        <div className="col-sm-8">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="add_nacimiento"
                                                onChange = { e => this.setState({fecha_nacimiento:e.target.value})}
                                                placeholder = {this.state.nacimiento} 
                                            />
                                        </div>
                                    </div>
                                </form>
                                <div id="rta_personaSubmit" className="table-responsive" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default Post;