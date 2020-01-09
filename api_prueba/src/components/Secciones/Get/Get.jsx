import React from 'react'


const Get = ()=>(
    <section className="api mt-5" id="api">
        <div className="container">
            <div className="row justify-content-center">
               <h4 className="mb-4 col-sm-12 text-center text-secondary">Traer un Registro de la tabla Personas</h4>
               <div className="mb-4 bg-dark col-sm-12 col-md-8 border border-light">
                    <div className="d-lg-flex justify-content-md-between pl-3 pr-5 pt-4">
                        <div className="opcion">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button id="traerPersona" className="btn btn-success" type="button">Traer Persona</button>
                                </div>
                                <input id="idTraerPersona" type="text" className="form-control" placeholder="Código" />
                            </div>  
                            <p className="text-left pt-3 text-white">Obtiene una persona según el código que se ingrese</p>
                        </div>
                        <div id="rta_traerPersona" className="table-responsive ml-5" ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Get;