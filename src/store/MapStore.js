import { observable, action, computed } from "mobx";
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

  @computed
  get texturesFilled() {
    return this.idList
      .map(id => this.textures[id])
      .filter(texture => texture !== undefined);
  }

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
