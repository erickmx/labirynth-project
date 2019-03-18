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
            disableAlpha
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
    idShow: -1,
    existsError: false
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

  validateMap = map => {
    const lines = map
      .split("\n")
      .filter(line => line !== "")
      .map(line => line.replace(/\s+/g, ""));
    const mapLength = lines.length - 1;
    const re = new RegExp(`^\\d?(\\d+(\\s*,\\s*\\d+){1,${mapLength}})$`);
    const inValidLines = lines
      .map(line => re.test(line))
      .filter(valid => !valid);

    if (inValidLines.length > 0) {
      alert("El Archivo no es valido.");
      return false;
    }
    const parsed = lines.map(line => line.split(","));
    return parsed;
  };

  handleFileChange = event => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = event => {
      const textFile = event.target.result;
      const validMap = this.validateMap(textFile);
      this.props.maps.setMap(!!validMap ? validMap : []);

      this.setState({
        selectedFile: file,
        existsError: !validMap
      });
    };
    reader.readAsText(file);
  };

  render() {
    return (
      <div>
        <h4>ELIGE UN ARCHIVO PARA EL MAPA</h4>
        <input type="file" name="file" onChange={this.handleFileChange} />
        <ul>
          {!!this.state.selectedFile &&
            this.props.maps.idList.map((idMap, index) => {
              return (
                <li>
                  <p>ID: {idMap}</p>
                  <input
                    type="text"
                    name="terrainName"
                    placeholder="nombre del terreno"
                    required
                  />
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
        <button disabled={!this.state.selectedFile || this.state.existsError}>
          Confirmar
        </button>
      </div>
    );
  }
}

export { FormMap };
