import React,{Component} from 'react';
import { create } from 'domain';

export default class Formulario extends Component {

    constructor(props){
        super(props);
        this.nameGasto = React.createRef();
        this.gasto = React.createRef();
    }

    crearGasto = (e) => {
        e.preventDefault();

        //creando el objeto con los datos
        const gastos = {
            nameGasto: this.nameGasto.current.value,
            gasto: this.gasto.current.value        
        }

        //enviando por props
        this.props.agregarGasto(gastos)

        //resetear formulario
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aquí</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" ref={this.nameGasto} placeholder="Ej: Transporte" ></input>
                </div>
                <div className="campo">
                    <label>Gasto</label>
                    <input className="u-full-width" type="text" ref={this.gasto} placeholder="Ej: 300" ></input>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" ></input>
            </form>
        );
    }
}