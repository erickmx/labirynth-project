import React, { Component } from "react";
import { observer, inject, PropTypes as mobxPropTypes } from "mobx-react";
import propTypes from "prop-types";
import { Terrain } from "../../components";

@inject("maps", "entities")
@observer
class Map extends Component {
  handleTerrainClick = (x, y) => {
    //this.props.maps.set
  };

  render() {
    const { maps, entities, isEdit } = this.props;
    const entity = entities.getEntity(0);
    const terrainCosts = entity && entity.terrainCosts;

    return (
      <div>
        {maps &&
          maps.map.map((line, i) => {
            return (
              <p key={i}>
                {line.map((val, j) => {
                  const cost = terrainCosts && terrainCosts[val];
                  const texture = maps.textures[val];
                  return (
                    <Terrain
                      className={isEdit ? "--small" : ""}
                      texture={texture}
                      id={val}
                      cost={cost}
                    />
                  );
                })}
              </p>
            );
          })}
      </div>
    );
  }
}

Map.wrappedComponent.propTypes = {
  maps: mobxPropTypes.observableObject.isRequired,
  entities: mobxPropTypes.observableObject.isRequired,
  isEdit: propTypes.bool
};

export { Map };
