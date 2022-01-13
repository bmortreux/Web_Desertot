import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Personnes } from '../models/personnes/personnes.model';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  constructor(private http: HttpClient) { }

  public getPersonnesList(): Observable<Personnes[]> {

    return this.http.get<Personnes[]>(`${environment.url}/persons`);

  }

  public getPerson(id?: number): Observable<Personnes> {
    return this.http.get<Personnes>(`${environment.url}/person/${id}`)
  }

  public createPerson(personnes: Personnes, id?: number): Observable<Personnes> {
    return this.http.post<Personnes>(`${environment.url}/${id}/addPerson`, personnes);
  }

  public deletePerson(id?: number): Observable<any> {
    return this.http.delete(`${environment.url}/person/${id}`);
  }

  public modifyPerson(personnes: Personnes, id?: string | null): Observable<Personnes> {
    return this.http.put<Personnes>(`${environment.url}/person/${id}`, personnes);
  }

  public getPersonName(name?: string | null): Observable<Personnes> {
    return this.http.get<Personnes>(`${environment.url}/persons/${name}`)
  }

}
