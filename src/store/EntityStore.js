import { observable, action, toJS } from "mobx";

class EntityStore {
  @observable
  entitys = Array(4);
  @observable
  selectedEntity = null;

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
    const entityFounded = this.getEntity(idEntity);
    const terrainCosts = entityFounded && entityFounded.terrainCosts;
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
    this.entitys[idEntity] = {
      ...entity,
      [field]: value
    };
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
