import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
// @ts-ignore
import { personnes } from '../models/personnes';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  constructor(private http: HttpClient) { }

  public getPersonnesList(): Observable<personnes[]> {

    return this.http.get<personnes[]>(`${environment.url}/persons`);

  }

  public createPerson(personnes: personnes, id: number): Observable<personnes> {
    return this.http.post<personnes>(`${environment.url}/${id}/addPerson`, personnes);
  }
}
