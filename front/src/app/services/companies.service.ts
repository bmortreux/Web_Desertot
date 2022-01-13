import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Companies} from "../models/companies/companies.model";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  public getCompaniesList(): Observable<Companies[]> {
    return this.http.get<Companies[]>(`${environment.url}/companies`);
  }

  public createCompany(companies: Companies): Observable<Companies> {
    return this.http.post<Companies>(`${environment.url}/addCompany`, companies);
  }

  public deleteCompany(id?: number): Observable<any> {
    return this.http.delete(`${environment.url}/company/${id}`);
  }

  public getCompany(id?: number): Observable<Companies> {
    return this.http.get<Companies>(`${environment.url}/company/${id}`)
  }

  public modifyCompany(companies: Companies, id?: number): Observable<Companies> {
    return this.http.put<Companies>(`${environment.url}/company/${id}`, companies);
  }
}
