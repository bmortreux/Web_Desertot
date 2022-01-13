import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Companies} from "../../models/companies/companies.model";
import {Personnes} from "../../models/personnes/personnes.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompaniesService} from "../../services/companies.service";
import {PersonnesService} from "../../services/personnes.service";

@Component({
  selector: 'app-add-persons',
  templateUrl: './add-persons.component.html',
  styleUrls: ['./add-persons.component.css']
})
export class AddPersonsComponent implements OnInit {

  public companies: Companies[] | undefined;

  public createPerson: FormGroup;

  @Output() createEvent = new EventEmitter<Personnes>();

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private companiesService: CompaniesService,
              private router: Router, private personsService: PersonnesService) {
    this.createPerson = this.formBuilder.group({
      profession: '',
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

    // @ts-ignore
    this.companies.forEach(function(companie) {
      var temp:String;
      temp = companie.name + " (" + companie.city + ")";
      if (temp == texte) {
        // @ts-ignore
        id = companie.company_id;
      }
    })

    var p = document.getElementById("profession");
    // @ts-ignore
    var prof = p.options[p.selectedIndex].text;

    const person: Personnes = {
      profession: prof,
      name: personData.name,
      firstname: personData.firstName,
      phone: personData.phone,
      city: personData.city,
      company: new Companies(),
      nameCompany:undefined,
    }

    // @ts-ignore
    this.personsService.createPerson(person,id).subscribe((personResponse) => {
      this.createEvent.emit(personResponse);
      this.createPerson.reset();
    });
    this.router.navigate(['annuairePersons']);
  }
}
