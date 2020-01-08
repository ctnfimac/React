import React from 'react'

const Delete = ()=>(
    <section className="api mt-5" id="api">
        <div className="container p-2">
            <div className="row justify-content-center">
                <h3 className="mb-4 col-sm-12 text-center">Eliminar un Registro de la tabla Personas</h3>
                <div className="mb-4 bg-dark col-sm-12 col-md-8">
                    <div className="d-lg-flex justify-content-md-between pl-5 pr-5 pt-4">
                        <div className="opcion">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button id="EliminarPersona" className="btn btn-success" type="button">Eliminar Persona</button>
                                </div>
                                <input id="idEliminarPersona" type="text" className="form-control"  placeholder="Codigo" />
                            </div>  
                            <p className="text-left pt-3 text-white">Elimina la persona que tenga el codigo ingresado</p>
                        </div>
                        <div id="rta_EliminarPersona" className="table-responsive ml-2" ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Delete;