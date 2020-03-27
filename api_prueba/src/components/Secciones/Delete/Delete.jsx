import React, {Component} from 'react'

class Delete extends Component{

    constructor(){
        super()
        this.state = {
            codigo : ''
        }
    }

    eliminarPersona = () =>{
        fetch('http://127.0.0.1:5000/personadelete/'+this.state.codigo,{
            method: 'DELETE',
        })
        .then(data =>{
            document.getElementById('rta_EliminarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-warning">'
                    +'<strong>Persona Eliminada</strong>'
                    +'</div>';
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición, ' + error.message);
            document.getElementById('rta_EliminarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                    +'<strong>Error al querer eliminar la persona</strong>'
                    +'</div>'
        });
    }

    render(){
        return(
            <section className="api mt-5" id="api">
            <div className="container">
                <div className="row justify-content-center">
                    <h3 className="mb-4 col-sm-12 text-center text-secondary">Eliminar un Registro de la tabla Personas</h3>
                    <div className="mb-4 bg-dark col-sm-12 col-md-8 border border-light">
                        <div className="d-lg-flex justify-content-md-between pl-5 pr-5 pt-4">
                            <div className="opcion">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button 
                                            id="EliminarPersona" 
                                            className="btn btn-success" 
                                            type="button"
                                            onClick= { this.eliminarPersona}
                                        >Eliminar Persona
                                        </button>
                                    </div>
                                    <input 
                                        id="idEliminarPersona" 
                                        type="text" 
                                        className="form-control"  
                                        placeholder="Codigo" 
                                        onChange = { e => this.setState({codigo: e.target.value})}
                                    />
                                </div>  
                                <p className="text-left pt-3 text-white">Elimina la persona que tenga el codigo ingresado</p>
                            </div>
                            <div id="rta_EliminarPersona" className="table-responsive ml-2" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Delete;