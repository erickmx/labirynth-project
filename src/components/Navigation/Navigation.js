import React, { Component } from "react";
import { Grid, Cell } from "react-foundation";
import { Link } from "react-router-dom";

class Navigation extends Component {

    render() {

        return (
            <Grid flexDirCol alignY>
                <Cell small={12}>
                    <button><Link to="/FormMap">Cargar Mapa</Link></button>
                    <button><Link to="/FormEntity"> Crear Personaje </Link></button>
                    <button onClick="alert('hola');"><Link to=""> Elegir I/F </Link></button>
                    <button><Link to=""> Jugar </Link></button>
                </Cell>
            </Grid>
        )
    }
}

export { Navigation };