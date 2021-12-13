import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonnesService} from "../services/personnes.service";
// @ts-ignore
import {personnes} from '../models/personnes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public persons: personnes[];

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private personsService : PersonnesService, private router: Router) {
    this.persons= [];
  }

  ngOnInit(): void {
    this.personsService.getPersonnesList().subscribe((personResponse => {
      this.persons = personResponse;
    }))
  }

}
