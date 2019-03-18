import React from "react";
import { Navigation } from "../../components"
import "bulma";


const Modal = () => {
    return (
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <Navigation></Navigation>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    Hola
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Confirmar</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export { Modal };