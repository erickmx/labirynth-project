import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Terrain } from "../../components";
import { Grid, Cell } from "react-foundation";

@inject("maps", "entities")
@observer
class Map extends Component {
  render() {
    const { maps, entities } = this.props;
    const entity = entities.getEntity("goku");
    const terrainCosts = entity && entity.terrainCosts;

    return (
      <Grid flexDirCol="all" centerAlign>
        {maps &&
          maps.map.map((line, i) => {
            return (
              <Cell small={1} key={i}>
                <Grid flexDirRow="all" alignX="spaced" centerAlign>
                  {line.map((val, j) => {
                    const cost = !!terrainCosts ? terrainCosts[val] : {};
                    const texture = maps.textures[val];
                    return (
                      <Cell small={1} key={`${i}${j}`}>
                        <Terrain texture={texture} id={val} cost={cost} />
                      </Cell>
                    );
                  })}
                </Grid>
              </Cell>
            );
          })}
      </Grid>
    );
  }
}

export { Map };
