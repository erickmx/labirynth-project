import React, { Component, Fragment, createRef, RefObject } from "react";
import { observer, inject } from "mobx-react";
import { Terrain } from "../components";

@inject("maps")
@observer
class Map extends Component {
  mapRef = null;
  componentDidMount() {
    this.mapRef && this.mapRef.focus();
    this.props.maps &&
      this.props.maps.setMap([[0, 0, 0], [1, 2, 3], [4, 5, 6]]);
  }
  render() {
    const { maps, entity } = this.props;
    const terrainCosts = entity && entity.terrainCosts;

    return (
      <div ref={el => (this.mapRef = el)} onFocus={() => alert("Hii")}>
        Hola
        {maps &&
          maps.map.map(line => {
            return (
              <>
                <div>
                  {line.map(val => {
                    const propertys = !!terrainCosts
                      ? terrainCosts.get(val)
                      : {};
                    {
                      /*return <Terrain {...propertys} />;*/
                    }
                    return <div>val</div>;
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
