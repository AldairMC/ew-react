import React,{Component} from 'react';

export default class Gasto extends Component {

    render() {
        const {nameGasto, gasto} = this.props.valor
        
        return (
            <li className="gastos">
                <p>
                    {nameGasto}
                    <span className="gasto">$ {gasto}</span>
                </p>
            </li>
        );
    }
}