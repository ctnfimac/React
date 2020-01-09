import React from 'react'


const Post = () => (
    <section className="api mt-5" id="api">
        <div className="container">
            <div className="row justify-content-center">
                <h4 className="mb-4 col-sm-12 text-center text-secondary">Agregar un registro a la tabla Personas</h4>
                <div className="mb-4 bg-dark col-sm-12 col-md-6 pb-3 border border-light">
                    <div className="justify-content-md-between pt-4">
                        <div className="opcion">
                            <div className="input-group mb-4">
                                <button id="agregar" className="btn btn-success" type="button">Agregar Persona</button>
                            </div>  
                        </div>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="codigo" className="col-sm-3 col-form-label text-white">Código:</label>
                                <div className="col-sm-8">
                                <   input type="text" className="form-control" id="add_codigo" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="nombre" className="col-sm-3 col-form-label text-white">Nombre:</label>
                                <div className="col-sm-8">
                                <   input type="text" className="form-control" id="add_nombre" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="apellido" className="col-sm-3 col-form-label text-white">Apellido:</label>
                                <div className="col-sm-8">
                                <   input type="text" className="form-control" id="add_apellido" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="nacimiento" className="col-sm-3 col-form-label text-white">Nacimiento:</label>
                                <div className="col-sm-8">
                                <   input type="text" className="form-control" id="add_nacimiento" />
                                </div>
                            </div>
                        </form>
                        <div id="rta_agregarPersona" className="table-responsive" ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export default Post;