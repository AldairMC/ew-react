import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './FormularioGastos'
import Listado from './Listado';
import helper from '../helper';
import Info from './InfoGastos';


class App extends Component{
  
  state = {
    gastos: {},
    presupuesto: '',
    restante: ''
  }

  componentDidMount(){
    this.obtenerPresupuesto()
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es su presupuesto?');
    let resultado = helper.validarPresupuesto(presupuesto)

    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }else{
      this.obtenerPresupuesto()
    }
  }

  agregarGasto = gasto => {
    //hacemos una copia del state actual
    const gastos = {...this.state.gastos}
    
    //agregando el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto

    //restamos al presupuesto
    let cantidadGastada = gasto.gasto
    this.restarPresupuesto(cantidadGastada)

    //agregando al states
    this.setState({
      gastos: gastos
    })
  }

  restarPresupuesto = cantidad => {
    let cantidadGasto = Number(cantidad);
    
    //tomando copia del restante del state
    let restante = this.state.restante

    restante = restante - cantidadGasto;
        
    this.setState({
      restante: restante
    })
  }
  
  render(){
    return(
      <div className="App container">
        <header>
          <Header 
            titulo='Expenses weekly' 
          />
        </header>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form 
                agregarGasto={this.agregarGasto}
              />   
            </div>
            <div className="one-half column">
              <Listado 
                gastos={this.state.gastos}
              />

              <Info 
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default App;
