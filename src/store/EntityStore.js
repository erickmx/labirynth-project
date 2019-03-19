import { observable, action, toJS } from "mobx";

class EntityStore {
  @observable
  entitys = {};

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
    this.addToField(idEntity, "terrainCosts", {
      ...terrainCosts,
      [idTerrain]: cost
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

  @action
  addToField = (idEntity, field, value) => {
    const entity = this.getEntity(idEntity);
    this.entitys = {
      ...this.entitys,
      [idEntity]: {
        ...entity,
        [field]: value
      }
    };
    console.log("====================================");
    console.log("ADDTOFIELD", toJS(this.entitys));
    console.log("====================================");
  };

  @action
  addName = (idEntity, name) => {
    this.addToField(idEntity, "name", name);
  };

  @action
  addAvatar = (idEntity, avatar) => {
    this.addToField(idEntity, "image", avatar);
  };
}

export default EntityStore;
