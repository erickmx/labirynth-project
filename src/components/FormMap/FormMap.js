import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { inject, observer } from "mobx-react";
import "./FormMap.scss";

const ColorPicker = ({
  onClick,
  color,
  displayColorPicker,
  onClose,
  onChange,
  ...props
}) => {
  return (
    <div>
      <div className="swatch" onClick={() => onClick()}>
        <div className="color" style={{ backgroundColor: color }} />
      </div>
      {displayColorPicker ? (
        <div className="popover">
          <div className="cover" onClick={() => onClose()} />
          <ChromePicker
            color={color}
            onChange={colorSelected => onChange(colorSelected)}
          />
        </div>
      ) : null}
    </div>
  );
};

@inject("maps")
@observer
class FormMap extends Component {
  state = {
    selectedFile: null,
    idShow: -1
  };

  handleColorChange = (id, color) => {
    this.props.maps.setTexture(id, color);
  };

  handleClick = idShow => {
    this.setState({ idShow });
  };

  handleClose = () => {
    this.setState({ idShow: -1 });
  };

  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          onChange={event => {
            const file = event.target.files && event.target.files[0];
            this.setState(
              {
                selectedFile: file
              },
              () => {
                console.log(file);
                this.props.maps.setMap([[1, 2, 3], [4, 5, 6]]);
              }
            );
          }}
        />
        <ul>
          {!!this.state.selectedFile &&
            this.props.maps.idList.map((idMap, index) => {
              return (
                <li>
                  <p>ID: {idMap}</p>
                  <ColorPicker
                    onClose={this.handleClose}
                    displayColorPicker={this.state.idShow === index}
                    onClick={() => this.handleClick(index)}
                    color={
                      this.props.maps.textures &&
                      this.props.maps.textures[idMap]
                    }
                    onChange={color => this.handleColorChange(idMap, color.hex)}
                  />
                </li>
              );
            })}
        </ul>
        <button disabled={!this.state.selectedFile}>Confirmar</button>
      </div>
    );
  }
}

export { FormMap };
