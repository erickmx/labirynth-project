import { ITerrain } from "./ITerrain";

export interface IEntity {
  name: string;
  posX: number;
  posY: number;
  entityImage: string;
  terrainCosts: ITerrain[];
}
