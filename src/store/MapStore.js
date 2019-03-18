import { observable, action } from "mobx";
import { uniq } from "lodash";

class MapStore {
  @observable
  map = [];
  @observable
  idList = [];
  @observable
  textures = {
    0: "#564738",
    1: "#ff44ee",
    2: "#446688",
    3: "#aaeecc",
    4: "#232323",
    5: "#123456",
    6: "#097654"
  };

  @action
  setMap = map => {
    this.map = map;
    this.idList = uniq(this.map.reduce((acc, cur) => [...acc, ...cur], []));
  };

  @action
  setTexture = (id, color) => {
    this.textures = { ...this.textures, [id]: color };
  };
}

export default MapStore;
