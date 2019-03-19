import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import "bulma";

class Navigation extends Component {

    render() {

        return (
            <div className="tabs">
                <ul>
                    <li className="is-active"><Link to="/FormMap">Cargar Mapa</Link></li>
                    <li><Link to="/FormEntity"> Crear Personaje </Link></li>
                    <li><Link to="/"> Elegir I/F </Link></li>
                    <li><Link to="/"> Jugar </Link></li>
                </ul>
            </div>
        )
    }
}

export { Navigation };
