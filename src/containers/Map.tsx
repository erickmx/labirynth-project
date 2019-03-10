import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import MapStore from "../store/MapStore";
import { IEntity } from "../interfaces";
import { Terrain } from "../components";

interface MapProps {
  map?: MapStore;
  entity?: IEntity;
}

@inject("maps")
@observer
class Map extends Component<MapProps> {
  render() {
    const { map, entity } = this.props;
    const terrainCosts = entity && entity.terrainCosts;

    return (
      <div>
        {map &&
          map.map.map((line: number[]) => {
            return (
              <>
                <div>
                  {line.map(val => {
                    const propertys = !!terrainCosts
                      ? terrainCosts.get(val)
                      : {};
                    return <Terrain {...propertys} />;
                  })}
                </div>
                <br />
              </>
            );
          })}
      </div>
    );
  }
}

export { Map };
