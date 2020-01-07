import React from 'react';


const Inicio = () => (
        <section className="api mt-5" id="api">
            <div className="container p-2">
                <div className="row">
                    <h3 className="mb-4 col-sm-12">Traer Registros de la tabla Personas</h3>
                    <div className="mb-4 bg-dark col-sm-12">
                        <div className="d-lg-flex justify-content-md-between pl-5 pr-5 pt-4">
                            <div className="opcion">
                                <button id="traerPersonas" className="btn btn-md btn-success" type="submit">Petición</button>
                                <p className="text-left pt-3 text-white">Obtiene toda la información de las personas guardadas</p>
                            </div>
                            <div id="rta_traerPersonas" className="table-responsive" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)

export default Inicio;