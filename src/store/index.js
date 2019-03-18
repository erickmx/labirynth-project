import MapStore from "./MapStore";
import EntityStore from "./EntityStore";

export default {
  maps: new MapStore(),
  entities: new EntityStore()
};
