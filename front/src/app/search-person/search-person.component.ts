import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {personnes} from "../models/personnes";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {PersonnesService} from "../services/personnes.service";

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  public persons: personnes[];

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
      // @ts-ignore
      this.personsService.getPersonName(this.name).subscribe((personResponse => {
        this.persons = personResponse;
      }));
    })
  }

  deletePerson(id: number): void {
    this.personsService.deletePerson(id).subscribe(personResponse => {
      this.ngOnInit();
    });
  }
}
