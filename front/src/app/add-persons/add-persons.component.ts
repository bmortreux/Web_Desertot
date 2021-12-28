import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// @ts-ignore
import {companies} from "../models/companies";
// @ts-ignore
import {person} from "../models/personnes";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompaniesService} from "../services/companies.service";
import {PersonnesService} from "../services/personnes.service";

@Component({
  selector: 'app-add-persons',
  templateUrl: './add-persons.component.html',
  styleUrls: ['./add-persons.component.css']
})
export class AddPersonsComponent implements OnInit {

  // @ts-ignore
  public companies: companies[];

  public createPerson: FormGroup;

  @Output() createEvent = new EventEmitter<person>();

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private companiesService: CompaniesService,
              private router: Router, private personsService: PersonnesService) {
    this.createPerson = this.formBuilder.group({
      name: '',
      firstName: '',
      phone: '',
      city: '',
      id: '',
    });
  }

  ngOnInit(): void {
    this.companiesService.getCompaniesList().subscribe((companiesResponse => {
      this.companies = companiesResponse;
    }))
  }

  onSubmit(personData: any) {
    let id: number;
    var liste;
    var texte:String;
    liste = document.getElementById("company");
    // @ts-ignore
    texte = liste.options[liste.selectedIndex].text;

    this.companies.forEach(function(companie) {
      var temp:String;
      temp = companie.name + " (" + companie.city + ")";
      if (temp == texte) {
        // @ts-ignore
        id = companie.company_id;
      }
    })

    const person: person = {
      name: personData.name,
      firstname: personData.firstName,
      phone: personData.phone,
      city: personData.city,
    }

    // @ts-ignore
    this.personsService.createPerson(person,id).subscribe((personResponse) => {
      this.createEvent.emit(personResponse);
      this.createPerson.reset();
    });
    this.router.navigate(['annuairePersons']);
  }
}
