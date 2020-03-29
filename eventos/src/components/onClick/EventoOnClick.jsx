import React, {Component} from 'react'
import './EventoOnClick.css'

const COLORES = {
    tomato: 'tomato',
    steelblue: 'steelblue',
    orange: 'orange',
    white: '#fff',
    forestgreen: 'forestgreen'
}

class EventoOnClick extends Component{

    constructor(){
        super()
        this.state = { color : ''}
    }

    _renderButton = (color) =>{
        return(
            <button 
                key = {color}  
                onClick={ () => this.setState({color:color}) }
                className= 'btn-option' 
                style = {{ backgroundColor : color}} 
            >   
            </button>
        )
    }
    
    render(){
        console.log('render',this.state.color)
        return(
            <section className="eventonclick">
                <div className="container">
                    <div className="event-content">
                        <div className="menu">
                            { Object.keys(COLORES).map(this._renderButton)}
                        </div>
                        <Panel color= {this.state.color}/>
                    </div>
                </div>
            </section>
        )
    }
}

class Panel extends Component{

    constructor(props){
        super(props)
        this.state = {
            color: props.color
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(this.props.color !== prevProps.color){
    //         this.setState(prevProps)
    //         console.log('entro al if')
    //     }       
    //     console.log('entro',prevProps,this.props.color )
    //     console.log('prevState', prevState)
    // }

    componentWillReceiveProps(nextProps){
        this.setState({ color: nextProps.color})
    }

    render(){
        return(
            <div className="panel" style={{backgroundColor:this.state.color}}></div>
        )
    }
}


export default EventoOnClick;