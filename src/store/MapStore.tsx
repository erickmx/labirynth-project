import { observable, action, toJS, computed } from "mobx";
import { uniq } from "lodash";
import { ITerrain } from "../interfaces";

class MapStore {
  @observable
  map: number[][] = [];
  @observable
  idList: number[] = [];

  @action
  setMap = (map: number[][]): void => {
    this.map = map;
    this.idList = uniq(
      this.map.reduce((acc: number[], cur: number[]) => [...acc, ...cur], [])
    );
  };
}

export default MapStore;
