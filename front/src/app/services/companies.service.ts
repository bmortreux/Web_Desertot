import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {companies} from "../models/companies";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  public getCompaniesList(): Observable<companies[]> {
    return this.http.get<companies[]>(`${environment.url}/companies`);
  }
}
