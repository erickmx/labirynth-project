import { observable, action } from "mobx";
import { uniq } from "lodash";

class MapStore {
  @observable
  map = [];
  @observable
  idList = [];
  @observable
  textures = {};
  @observable
  isBeginning = {};
  @observable
  isEnd = {};


  @action
  setMap = map => {
    this.textures = {};
    this.idList = [];
    this.map = map;
    this.idList = uniq(this.map.reduce((acc, cur) => [...acc, ...cur], []));
  };

  @action
  setTextureColor = (id, color) => {
    const newTexture = this.textures[id];
    this.textures = { ...this.textures, [id]: { ...newTexture, color } };
  };

  @action
  setTextureName = (id, name) => {
    const newTexture = this.textures[id];
    this.textures = { ...this.textures, [id]: { ...newTexture, name } };
  };
}

export default MapStore;
