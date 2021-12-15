import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
// @ts-ignore
import {companies} from "../models/companies";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  public getCompaniesList(): Observable<companies[]> {
    return this.http.get<companies[]>(`${environment.url}/companies`);
  }

  public createCompany(companies: companies): Observable<companies> {
    return this.http.post<companies>(`${environment.url}/addCompany`, companies);
  }

  public deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${environment.url}/company/${id}`);
  }
}
