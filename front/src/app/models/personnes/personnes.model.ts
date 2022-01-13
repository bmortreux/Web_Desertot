import {Companies} from "../companies/companies.model";

export class Personnes {
  person_id?: number;
  profession: String | undefined;
  name: String | undefined;
  firstname: String | undefined;
  phone: String | undefined;
  city: String | undefined;
  company: Companies | undefined;
  nameCompany: String | undefined;
}
