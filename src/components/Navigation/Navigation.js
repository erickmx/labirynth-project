import React, { Component } from "react";
import { Grid, Cell } from "react-foundation";
import { Link } from "react-router-dom";

class Navigation extends Component {

    render() {

        return (
            <Grid flexDirCol alignY>
                <Cell small={12}>
                    <Link to="/FormMap">Cargar Mapa</Link>
                    <Link to="/FormEntity"> Crear Personaje </Link>
                    <Link to=""> Elegir I/F </Link>
                    <Link to=""> Jugar </Link>
                </Cell>
            </Grid>
        )
    }
}

export { Navigation };