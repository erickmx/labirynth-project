import React, { Component } from "react";
import { Grid, Cell } from "react-foundation";
import { Link } from "react-router-dom";
import './Navigation.scss'

import 'bulma'

class Navigation extends Component {

    render() {

        return (
            <div class="tabs">
                <ul>
                    <li class="is-active"><Link to="/FormMap">Cargar Mapa</Link></li>
                    <li><Link to="/FormEntity"> Crear Personaje </Link></li>
                    <li><Link to=""> Elegir I/F </Link></li>
                    <li><Link to=""> Jugar </Link></li>
                </ul>
            </div>
        )
    }
}

export { Navigation };