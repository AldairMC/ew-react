import React, {Component} from 'react';
import Presupuesto from './InfoDinero/Presupuesto'
import Restante from './InfoDinero/Restante'

export default class InfoGastos extends Component {

    render() {
        return (
            <React.Fragment>
                <Presupuesto 
                    press={this.props.presupuesto}
                />
                <Restante
                    press={this.props.presupuesto} 
                    ress={this.props.restante}
                />
            </React.Fragment>
        );
    }
}