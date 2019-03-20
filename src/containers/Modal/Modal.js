import React, { Component } from "react";
import {
  Navigation,
  FormMap,
  FormEntity,
  FormStartEnd
} from "../../components";
import { observer, inject, PropTypes as mobxPropTypes } from "mobx-react";
import "bulma";

@inject("maps", "entities")
@observer
class Modal extends Component {
  state = {
    currentStep: 1,
    lastStep: 3,
    isActive: true
  };

  get isntLastStep() {
    const { currentStep, lastStep } = this.state;
    return currentStep !== lastStep;
  }

  setStep = step => {
    if (this.isntLastStep || step < this.state.lastStep) {
      this.setState({ currentStep: step });
    }
  };

  handleCancel = () => {
    this.setState({ isActive: false });
  };

  disableOnStep1 = () => {
    return this.state.currentStep === 1 && this.props.maps.idList.length === 0;
  };

  disableOnStep2 = () => {
    return (
      this.state.currentStep === 2 &&
      this.props.entities.entitys.filter(el => !el).lenght !== 0
    );
  };

  disableOnStep3 = () => {
    return (
      this.state.currentStep === 3 &&
      !this.props.maps.isBeginning.x &&
      !this.props.maps.isBeginning.y &&
      !this.props.maps.isEnd.x &&
      !this.props.maps.isEnd.y
    );
  };

  render() {
    return (
      <div className={`modal ${this.state.isActive && "is-active"}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <Navigation step={this.state.currentStep} setStep={this.setStep} />
          </header>
          <section className="modal-card-body">
            {this.state.currentStep === 1 && <FormMap />}
            {this.state.currentStep === 2 && <FormEntity />}
            {this.state.currentStep === 3 && <FormStartEnd />}
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => this.setStep(this.state.currentStep + 1)}
              disabled={
                this.disableOnStep1() ||
                this.disableOnStep2() ||
                this.disableOnStep3()
              }
            >
              {this.isntLastStep ? "Confirmar" : "Jugar"}
            </button>
            <button className="button" onClick={this.handleCancel}>
              Cancelar
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

Modal.wrappedComponent.propTypes = {
  maps: mobxPropTypes.observableObject.isRequired,
  entities: mobxPropTypes.observableObject.isRequired
};

export { Modal };
