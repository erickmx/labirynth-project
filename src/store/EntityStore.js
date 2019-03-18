import { observable, action } from "mobx";

class EntityStore {
  @observable
  entitys = {
    goku: {
      terrainCosts: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6
      },
      id: "goku",
      image: null
    }
  };

  @action
  getEntity = id => this.entitys[id];

  @action
  addEntity = (id, entity) => (this.entitys[id] = { ...entity });

  @action
  removeEntity = id => delete this.entitys[id];

  @action
  updateEntity = (id, entity) => {
    const oldEntity = this.getEntity(id);
    this.entitys[id] = { ...oldEntity, ...entity };
  };

  @action
  addCost = (idEntity, idTerrain, cost) => {
    const { terrainCosts } = this.getEntity(idEntity);
    this.updateEntity(idEntity, {
      terrainCosts: {
        ...terrainCosts,
        [idTerrain]: cost
      }
    });
  };

  @action
  updateCost = (idEntity, idTerrain, cost) => {
    this.addCost(idEntity, idTerrain, cost);
  };

  @action
  deleteCost = (idEntity, idTerrain) => {
    delete this.entitys[idEntity].terrainCosts[idTerrain];
  };
}

export default EntityStore;
