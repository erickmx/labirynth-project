import React, { Component } from "react";
import propTypes from "prop-types";
import "./Navigation.scss";

import "bulma";

class Navigation extends Component {
  handleStep = step => ev => {
    ev.preventDefault();
    this.props.setStep(step);
    return false;
  };
  render() {
    const { step } = this.props;
    return (
      <div className="tabs">
        <ul>
          <li className={step === 1 ? "is-active" : ""}>
            <a href="/" onClick={this.handleStep(1)}>
              Cargar Mapa
            </a>
          </li>
          <li className={step === 2 ? "is-active" : ""}>
            <a href="/" onClick={this.handleStep(2)}>
              Crear Personaje
            </a>
          </li>
          <li className={step === 3 ? "is-active" : ""}>
            <a href="/" onClick={this.handleStep(3)}>
              Elegir I/F
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  step: propTypes.number.isRequired,
  setStep: propTypes.func.isRequired
};

export { Navigation };
