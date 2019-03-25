import React, { Component } from "react";
import { inject, observer, PropTypes as mobxPropTypes } from "mobx-react";
import { Map } from "../../containers";
import "./FormStartEnd.scss";

const Switch = ({ onChange, isChecked, ...props }) => {
  return (
    <label className="switch">
      <input checked={isChecked} type="checkbox" onChange={onChange} />
      <span className="slider round" />
    </label>
  );
};

@inject("maps")
@observer
class FormStartEnd extends Component {
  state = {
    isEnd: false
  };

  handleCheck = () => {
    this.setState(prevState => ({ isEnd: !prevState.isEnd }));
  };

  handleTerrainClick = (x, y) => {
    const {
      props: { maps },
      state: { isEnd }
    } = this;
    isEnd ? maps.setEnd(x, y) : maps.setBeggin(x, y);
  };

  render() {
    return (
      <div>
        <Switch isChecked={this.state.isEnd} onChange={this.handleCheck} />
        <Map isEdit onTerrainClick={this.handleTerrainClick} />
      </div>
    );
  }
}

FormStartEnd.wrappedComponent.propTypes = {
  maps: mobxPropTypes.observableObject.isRequired
};

export { FormStartEnd };
