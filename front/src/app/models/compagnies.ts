// @ts-ignore
import {personnes} from './personnes';

export interface compagnies {
  company_id?: number;
  name: String;
  turnover: number;
  listPersons?: [personnes];
}
