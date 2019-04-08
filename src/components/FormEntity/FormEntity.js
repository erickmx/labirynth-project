import React, { Component } from "react";
import { observer, inject, PropTypes as mobxPropTypes } from "mobx-react";
import Select from "react-select";
import propTypes from "prop-types";
import "bulma";

import "./FormEntity.scss";
import { Input } from "../Input/Input";
import { validDecimals } from "../../utils";

const Table = ({ headers, children, ...props }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map(header => {
            return (
              <th key={header} title={header}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

@inject("maps", "entities")
@observer
class FormEntity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "belmont.png",
        "contra.png",
        "ninja.png",
        "ballena.jpg",
        "serpiente.jpg"
      ],
      idEntity: props.idEntity || 0,
      selectedOption: null
    };
  }

  componentDidMount() {
    const { idEntity } = this.state;
    const { maps, entities } = this.props;
    for (let idTerrain in maps.textures) {
      if (!maps.textures.hasOwnProperty(idTerrain)) {
        entities.addCost(idEntity, idTerrain, -1);
      }
    }
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.entities.addAvatar(this.state.idEntity, selectedOption);
  };

  handleChangeName = ev => {
    const name = ev.target.value;
    this.props.entities.addName(this.state.idEntity, name);
  };

  handleChangeTerrainCost = (idTerrain, cost) => {
    if (!validDecimals(cost)) {
      return;
    }
    this.props.entities.addCost(this.state.idEntity, idTerrain, cost);
  };

  render() {
    const { images, idEntity, selectedOption } = this.state;
    const { maps, entities } = this.props;
    const entity = entities.getEntity(idEntity);
    const keys = Object.keys(maps.textures);

    return (
      <div className="entity__container">
        <h4 className="entity__title font__zcool">ELIGE UN PERSONAJE</h4>
        {((entity && entity.image) || selectedOption) && (
          <>
            <div className="entity__choosed">
              <img
                src={`${window.location.origin}/assets/${(entity &&
                  entity.image) ||
                  selectedOption}`}
                alt={(entity && entity.image) || selectedOption}
              />
            </div>
            <br />
          </>
        )}
        <div className="field">
          <Select className="select-entity"
            placeholder="Selecionar..."
            name="Select-Entities"
            value={entity && entity.image}
            onChange={this.handleChange}
            options={images}
            menuRenderer={({ options, selectValue }) => {
              return (
                <div className="">
                  {options.map((image, index) => {
                    return (
                      <div
                        key={image}
                        onClick={() => {
                          selectValue(image);
                        }}
                      >
                        <img
                          className="entity__image"
                          alt={image}
                          src={`${window.location.origin}/assets/${image}`}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            }}
          />
        </div>
        <Input
          placeholder="Nombre"
          label="Nombre"
          onChange={this.handleChangeName}
          value={entity && entity.name}
        />
        <Table headers={["ID", "Nombre", "Color", "Costo"]}>
          <>
            {keys.map(key => {
              const texture = maps.textures[key];
              return (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{texture.name}</td>
                  <td>
                    <div
                      className="table__color-texture"
                      style={{
                        backgroundColor: texture.color,
                        color: texture.color
                      }}
                    >
                      _
                    </div>
                  </td>
                  <td>
                    <Input
                      type="number"
                      onChange={ev =>
                        this.handleChangeTerrainCost(key, ev.target.value)
                      }
                      min={-1}
                      step={"0.01"}
                      value={
                        entity &&
                        entity.terrainCosts &&
                        entity.terrainCosts[key]
                      }
                    />
                    <span>*Vacío para N/A</span>
                  </td>
                </tr>
              );
            })}
          </>
        </Table>
      </div>
    );
  }
}

FormEntity.wrappedComponent.propTypes = {
  maps: mobxPropTypes.observableObject.isRequired,
  entities: mobxPropTypes.observableObject.isRequired,
  idEntity: propTypes.number
};

export { FormEntity };
