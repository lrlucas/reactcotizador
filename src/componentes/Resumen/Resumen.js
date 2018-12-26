import React, {Component} from 'react';
import { primeraMayuscula } from '../../helper'
import Resultado from "../Resultado/Resultado";

export default class Resumen extends Component {

    mostrarResumen = () => {
        const { marca, year, plan } = this.props.datos;
        if (!marca || !year || !plan) return null;

        return(
            <div className="resumen">
                <h2>Resumen de Cotizacion</h2>
                <li>Marca: { primeraMayuscula(marca) }</li>
                <li>Plan: { primeraMayuscula(plan) }</li>
                <li>Year: { year }</li>
            </div>
        )
    };




    render() {

        return (
          <React.Fragment>
              { this.mostrarResumen() }
              <Resultado
                  resultado={ this.props.resultado }
              />
          </React.Fragment>
        );
    }
}

