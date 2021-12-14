// @ts-ignore
import {personnes} from './personnes';

export interface companies {
  company_id?: number;
  name: String;
  turnover: number;
  listPersons?: [personnes];
}
