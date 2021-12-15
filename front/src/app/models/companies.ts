// @ts-ignore
import {personnes} from './personnes';

export interface Companies {
  company_id?: number;
  name: String;
  city: String;
  phone: String;
  turnover: number;
  listPersons?: [personnes];
}
