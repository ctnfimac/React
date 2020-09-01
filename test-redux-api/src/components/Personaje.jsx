import React, { Component } from 'react'
import { connect } from 'react-redux';
import { mostrarPersonajes } from '../actions/index'

class Personaje extends Component{

    componentWillMount(){
        this.props.mostrarPersonajes()
    }

    renderList(){
        return this.props.personajes.map((personaje)=>{
           return(<tr key={personaje.mal_id}>
                <td>{personaje.title}</td>
                <td>{personaje.episodes}</td>
                <td>{personaje.synopsis}</td>
                <td><img src={personaje.image_url} alt={personaje.title}/></td>
            </tr>
           )
        })
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th>Título</th>
                        <th>Episodios</th>
                        <th>Sinopsis</th>
                        <th>Imágen</th>
                    </thead>
                    <tbody>
                        { this.renderList() }
                    </tbody>
                </table>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        personajes: state.personaje.list
    }
}

export default connect( mapStateToProps, {mostrarPersonajes})(Personaje);