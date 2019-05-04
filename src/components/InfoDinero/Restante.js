import React, {Component} from 'react';
import helper from '../../helper'

export default class Restante extends Component {

    render() {
        const presupuesto = this.props.press
        const restante = this.props.ress
        return (
            <div className={helper.revisarPres(presupuesto, restante)}>
                Restante: ${this.props.ress}
            </div>
        );
    }
}