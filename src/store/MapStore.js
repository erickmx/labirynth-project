import { observable, action } from "mobx";
import { uniq } from "lodash";

class MapStore {
  @observable
  map = [];
  @observable
  idList = [];
  @observable
  textures = {};

  @action
  setMap = map => {
    this.textures = {};
    this.idList = [];
    this.map = map;
    this.idList = uniq(this.map.reduce((acc, cur) => [...acc, ...cur], []));
  };

  @action
  setTexture = (id, color) => {
    this.textures = { ...this.textures, [id]: color };
  };
}

export default MapStore;
