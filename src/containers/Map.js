import React, { Component, Fragment, createRef, RefObject } from "react";
import { observer, inject } from "mobx-react";
import { Terrain } from "../components";
import { TopBar, TopBarLeft, TopBarRight, TopBarTitle } from "react-foundation";

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
                <TopBar>
                  <TopBarLeft>
                    <TopBarTitle>Game Labirynht</TopBarTitle>
                  </TopBarLeft>
                  <TopBarRight>Otro lado</TopBarRight>
                </TopBar>
                <div>
                  {line.map(val => {
                    const propertys = !!terrainCosts ? terrainCosts[val] : {};
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
