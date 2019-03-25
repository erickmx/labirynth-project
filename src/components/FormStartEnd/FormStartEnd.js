import React, { Component } from "react";
import { Map } from "../../containers";
import "./FormStartEnd.scss";

const Switch = (...props) => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
};

class FormStartEnd extends Component {
  state = {
    isBeggin: true
  };

  handleCheck = () => {
    this.setState(prevState => ({ isBeggin: !prevState.isBeggin }));
  };
  render() {
    return (
      <div>
        <Switch />
        <Map isEdit onTerrainClick={() => {}} />
      </div>
    );
  }
}

export { FormStartEnd };
