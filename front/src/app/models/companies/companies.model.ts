import {Personnes} from "../personnes/personnes.model";

export class Companies {
  company_id?: number;
  name: String | undefined;
  city: String | undefined;
  phone: String | undefined;
  turnover: number | undefined;
  listPersons?: [Personnes];
}
