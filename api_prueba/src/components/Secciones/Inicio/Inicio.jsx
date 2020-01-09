import React from 'react';


const Inicio = () => (
        <section className="api mt-5" id="api">
            <div className="container">
                <div className="row justify-content-center">
                    <h4 className="mb-4 col-sm-12 text-center text-secondary">Traer registros de la tabla Personas</h4>
                    <div className="mb-4 bg-dark col-sm-12 col-md-8 border border-light">
                        <div className="pl-5 pr-5 pt-4">
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