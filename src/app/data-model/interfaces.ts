export enum type {
  'job' = 'job',
  'story' = 'story',
  'comment' = 'comment',
  'poll' = 'poll',
  'pollopt' = 'pollopt',
}
export type ItemId = number; 

export interface Item {
  id: ItemId;
  deleted?: boolean;
  type?: type;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: ItemId;
  poll?: ItemId;
  kids?: ItemId[];
  url?: string;
  score?: number;
  title?: string;
  parts?: ItemId[];
  descendants?: number;
  by?:string;
}
export interface User {
    about?: string;
    created?:number;
    delay?: number;
    id: string;
    karma?: number;
    submitted?: ItemId[]
}
