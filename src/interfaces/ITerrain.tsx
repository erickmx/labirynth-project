export interface ITerrain {
  id: number;
  cost: number;
  name: string;
  imageTerrain: string;
  havePlayer?: boolean;
  visitNumbers?: number[];
  isBeggin?: boolean;
  isEnd?: boolean;
}
