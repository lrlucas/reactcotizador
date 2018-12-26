import React, { Component } from 'react';
import Header from './header/Header';
import Formulario from './Formulario/Formulario';

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper.js'
import Resumen from "./Resumen/Resumen";

class App extends Component {


  state = {
    resultado: '',
    datos: {}
  };


  cotizarSeguro = (datos) => {
    
    const { marca, plan, year } = datos;
    // agregar una base de 2000
    let resultado = 2000;
    // obtener la diferencia de años y 
    const diferencia = obtenerDiferenciaAnio(year)

    // por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    // americano 15%, asiatico 5% y europeo 30% de incremento
    // al valor actual
    resultado = calcularMarca(marca) * resultado
    // el plan del auto, el basico incrementa el valor de 20% y 
    // cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);
    
    // dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log(resultado)

    // crear objeto para el resumen
    const datoAuto = {
      marca: marca,
      plan: plan,
      year: year
    };



    // ya tenemos el costo
    this.setState({
      resultado: resultado,
      datos: datoAuto
    })

  };



  render() {
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de Seguro de Autos"
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
              datos={this.state.datos}
              resultado={this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
