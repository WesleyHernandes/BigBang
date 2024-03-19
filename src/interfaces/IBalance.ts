import type ICardBalance from "./ICardBalance";

export interface ITotal {
  value: number;
  income: number;
}

export default interface IBalance {
  total: ITotal;
  cards: ICardBalance[];
}
