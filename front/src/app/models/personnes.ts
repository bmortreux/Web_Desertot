// @ts-ignore
import {compagnies} from './compagnies';

export interface Personnes {
  person_id?: number;
  name: String;
  firstname: String;
  phone: String;
  city: String;
  company: compagnies;
}
