import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navegacion extends Component{
    render(){
        return(
            /*<nav className="navbar navbar-dark bg-primary">
                <Link className="navbar-brand" to="/#">API</Link>
                <ul className="ul-inline my-2 my-lg-0">
                    <Link to="/inicio" className="btn my-2 my-sm-0 ml-1 text-white">GET (all)</Link>
                    <Link to="/post" className="btn my-2 my-sm-0 ml-1 text-white">POST</Link>
                    <Link to="/delete" className="btn my-2 my-sm-0 ml-1 text-white">DELETE</Link>
                    <Link to="/put" className="btn my-2 my-sm-0 ml-1 text-white">PUT</Link>
                    <Link to="/get" className="btn my-2 my-sm-0 ml-1 text-white">GET (one)</Link>
                </ul>
            </nav>*/
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navegacion;