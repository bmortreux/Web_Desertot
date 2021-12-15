import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonnesService} from "../services/personnes.service";
// @ts-ignore
import {personnes} from '../models/personnes';
// @ts-ignore
import {companies} from '../models/companies';
import {CompaniesService} from "../services/companies.service";

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {

  public persons: personnes[];

  // @ts-ignore
  public companies: companies[];

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private personsService : PersonnesService,
              private companiesService: CompaniesService, private router: Router) {
    this.persons= [];
    this.companies= [];
    //on a besoin de faire un this.ngOnInit() car après valider le form et revenir avec le .navigate il faut maj le component
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.personsService.getPersonnesList().subscribe((personResponse => {
      this.persons = personResponse;
    }));
    this.companiesService.getCompaniesList().subscribe((companiesResponse => {
      this.companies = companiesResponse;
    }));
  }

  deletePerson(id: number): void {
    this.personsService.deletePerson(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }

  deleteCompany(id: number): void {
    this.companiesService.deleteCompany(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
