import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonnesService} from "../../services/personnes.service";
import {Personnes} from '../../models/personnes/personnes.model';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {

  public persons: Personnes[]= [];


  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private personsService : PersonnesService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.personsService.getPersonnesList().subscribe((personResponse => {
      this.persons = personResponse;
    }));
  }

  deletePerson(id?: number){
    this.personsService.deletePerson(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
