import React from 'react'


const Inicio = () => (
    <section class="api mt-5" id="api">
        <div class="container p-2">
            <div class="row">
                <h3 class="mb-4 col-sm-12">Traer Registros de la tabla Personas</h3>
                <div class="mb-4 bg-dark col-sm-12">
                    <div class="d-lg-flex justify-content-md-between pl-5 pr-5 pt-4">
                        <div class="opcion">
                            <button id="traerPersonas" class="btn btn-md btn-success" type="submit">Petición</button>
                            <p class="text-left pt-3 text-white">Obtiene toda la información de las personas guardadas</p>
                        </div>
                        <div id="rta_traerPersonas" class="table-responsive" ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Inicio;