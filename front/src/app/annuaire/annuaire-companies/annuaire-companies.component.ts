import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Companies} from '../../models/companies/companies.model';
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-annuaire-companies',
  templateUrl: './annuaire-companies.component.html',
  styleUrls: ['./annuaire-companies.component.css']
})
export class AnnuaireCompaniesComponent implements OnInit {

  public companies: Companies[] = [];

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private companiesService: CompaniesService, private router: Router) {
    //on a besoin de faire un this.ngOnInit() car après valider le form et revenir avec le .navigate il faut maj le component
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.companiesService.getCompaniesList().subscribe((companiesResponse => {
      this.companies = companiesResponse;
    }));
  }

  deleteCompany(id?: number){
    this.companiesService.deleteCompany(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
