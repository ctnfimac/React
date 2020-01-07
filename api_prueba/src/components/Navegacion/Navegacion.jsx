import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navegacion extends Component{
    render(){
        return(
            <nav class="navbar navbar-dark bg-primary">
                <Link class="navbar-brand" to="/#">API</Link>
                <ul class="ul-inline my-2 my-lg-0">
                    <Link to="/index" class="btn my-2 my-sm-0 ml-1 text-white">GET (all)</Link>
                    <Link to="/post" class="btn my-2 my-sm-0 ml-1 text-white">POST</Link>
                    <Link to="/delete" class="btn my-2 my-sm-0 ml-1 text-white">DELETE</Link>
                    <Link to="/put" class="btn my-2 my-sm-0 ml-1 text-white">PUT</Link>
                    <Link to="/get" class="btn my-2 my-sm-0 ml-1 text-white">GET (one)</Link>
                </ul>
            </nav>
        )
    }
}


export default Navegacion;