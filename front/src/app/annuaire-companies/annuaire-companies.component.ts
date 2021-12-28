import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
// @ts-ignore
import {companies} from '../models/companies';
import {CompaniesService} from "../services/companies.service";

@Component({
  selector: 'app-annuaire-companies',
  templateUrl: './annuaire-companies.component.html',
  styleUrls: ['./annuaire-companies.component.css']
})
export class AnnuaireCompaniesComponent implements OnInit {

  // @ts-ignore
  public companies: companies[];

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private companiesService: CompaniesService, private router: Router) {
    this.companies= [];
    //on a besoin de faire un this.ngOnInit() car après valider le form et revenir avec le .navigate il faut maj le component
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.companiesService.getCompaniesList().subscribe((companiesResponse => {
      this.companies = companiesResponse;
    }));
  }

  deleteCompany(id: number): void {
    this.companiesService.deleteCompany(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
