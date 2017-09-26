import React, { Component } from 'react';
import SecondComp from './SecondComp';

class Principal extends Component{
    render(){
        return(
            <div>
                <h2>Hola desde componente</h2>
                <br/>
                <h2>creado react componente</h2>
                <SecondComp></SecondComp>
            </div>
        );
    }
}

export default Principal;
