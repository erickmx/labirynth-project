import { observable, action, toJS, computed } from "mobx";
import { uniq } from "lodash";

class MapStore {
  @observable
  map = [];
  @observable
  idList = [];

  @action
  setMap = map => {
    this.map = map;
    this.idList = uniq(this.map.reduce((acc, cur) => [...acc, ...cur], []));
  };
}

export default MapStore;
