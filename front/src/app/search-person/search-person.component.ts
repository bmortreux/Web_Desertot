import { Component, OnInit } from '@angular/core';
import {Personnes} from "../models/personnes/personnes.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {PersonnesService} from "../services/personnes.service";

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  public persons: Personnes[];

  public name: string | null

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private personsService : PersonnesService,
              private router: Router) {
    this.name = '';
    this.persons= [];
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.name = routeParams['name'];
      this.personsService.getPersonName(this.name).subscribe((personResponse => {
        // @ts-ignore
        this.persons = personResponse;
      }));
    })
  }

  deletePerson(id?: number) {
    this.personsService.deletePerson(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
