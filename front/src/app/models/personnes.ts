// @ts-ignore
import {companies} from './companies';

export interface Personnes {
  person_id?: number;
  name: String;
  firstname: String;
  phone: String;
  city: String;
  company: companies;
}
