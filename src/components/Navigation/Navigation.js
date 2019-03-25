import React, { Component } from "react";
import propTypes from "prop-types";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <span style={{ marginRight: "10px" }}>Cargar Mapa</span>
              <FontAwesomeIcon icon="map" />
            </a>
          </li>
          <li className={step === 2 ? "is-active" : ""}>
            <a href="/" onClick={this.handleStep(2)}>
              <span style={{ marginRight: "10px" }}>Crear Personaje</span>
              <FontAwesomeIcon icon="user-secret" />
            </a>
          </li>
          <li className={step === 3 ? "is-active" : ""}>
            <a href="/" onClick={this.handleStep(3)}>
              <span style={{ marginRight: "10px" }}>Elegir I/F</span>
              <FontAwesomeIcon icon="map-marked" />
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
