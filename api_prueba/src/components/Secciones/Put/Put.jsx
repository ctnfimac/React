import React from 'react'


const Put = ()=>(
    <section className="api mt-5" id="api">
        <div className="container p-2">
            <div className="row justify-content-center">
                <h3 className="mb-4 col-sm-12 text-center">Modificar un Registro de la tabla Personas</h3>
                <div className="mb-4 bg-dark col-sm-12 col-md-6">
                    <div className=" justify-content-md-between pl-5 pr-5 pt-4">
                        <div className="opcion">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button id="mostrar" className="btn btn-success" type="button">Ver Persona</button>
                                </div>
                                <input id="idModificarPersona" type="text" className="form-control col-4"  placeholder="Codigo" />
                            </div>  
                        </div>
                        <form>
                            <input type="hidden" className="form-control" id="upd_codigo" />
                            <div className="form-group row">
                                <label htmlFor="nombre" className="col-sm-2 col-form-label text-white">Nombre</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="upd_nombre" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="apellido" className="col-sm-2 col-form-label text-white">Apellido</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="upd_apellido" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="nacimiento" className="col-sm-2 col-form-label text-white">Nacimiento</label>
                                <div className="col-sm-6">
                                <input type="text" className="form-control" id="upd_nacimiento" />
                                </div>
                            </div>
                        </form>
                        <div className="form-group row">
                                <div className="col-sm-10">
                                    <button className="btn btn-primary" id="modificar">Modificar</button>
                                </div>
                            </div>
                        <div id="rta_modificarPersona" className="table-responsive" ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Put;