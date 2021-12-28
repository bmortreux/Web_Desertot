import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonnesService} from "../services/personnes.service";
// @ts-ignore
import {personnes} from '../models/personnes';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {

  public persons: personnes[];


  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private personsService : PersonnesService,
              private router: Router) {
    this.persons= [];
    //on a besoin de faire un this.ngOnInit() car après valider le form et revenir avec le .navigate il faut maj le component
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.personsService.getPersonnesList().subscribe((personResponse => {
      this.persons = personResponse;
    }));
  }

  deletePerson(id: number): void {
    this.personsService.deletePerson(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
