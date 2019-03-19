import React from "react";
import { Navigation, FormMap } from "../../components"
import "bulma";


const Modal = () => {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <Navigation></Navigation>
                    {/*<button class="delete" aria-label="close"></button>*/}
                </header>
                <section className="modal-card-body">
                    <FormMap></FormMap>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Confirmar</button>
                    <button className="button">Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export { Modal };