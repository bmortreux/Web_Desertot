import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Personnes} from "../../models/personnes/personnes.model";
import {PersonnesService} from "../../services/personnes.service";
import {Companies} from "../../models/companies/companies.model";
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-modify-person',
  templateUrl: './modify-person.component.html',
  styleUrls: ['./modify-person.component.css']
})
export class ModifyPersonComponent implements OnInit {

  public id: string | null;

  public person: Personnes;

  public modifyPerson: FormGroup;

  public companies: Companies[] | undefined;

  @Output() createEvent = new EventEmitter<Personnes>();

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonnesService, private formBuilder: FormBuilder,
              private router: Router, private companiesService: CompaniesService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.modifyPerson = this.formBuilder.group({
      id: 0,
      name: '',
      firstname: '',
      phone: '',
      city: '',
      nameCompany: ''
    })
    this.person = {} as Personnes;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.personService.getPerson(this.id).subscribe((personResponse => {
      this.person = personResponse;
    }))
    this.companiesService.getCompaniesList().subscribe((companiesResponse => {
      this.companies = companiesResponse;
    }))
  }

  onSubmit(personData: any) {

    var liste;
    var texte:String;
    liste = document.getElementById("company");
    // @ts-ignore
    texte = liste.options[liste.selectedIndex].text;

    if(personData.name == '') {
      personData.name = this.person.name;
    }
    if(personData.firstname == '') {
      personData.firstname = this.person.firstname;
    }
    if(personData.phone == '') {
      personData.phone = this.person.phone;
    }
    if(personData.city == '') {
      personData.city = this.person.city;
    }
    var temp: String[];
    temp = texte.split(" ")

    //probleme d'affichage lors de la modification de l'emploi
   /* var p = document.getElementById("profession");
    // @ts-ignore
    var prof = p.options[p.selectedIndex].text;
    console.log(prof);*/

    const person: Personnes = {
      profession: undefined,
      name: personData.name,
      firstname: personData.firstname,
      phone: personData.phone,
      city: personData.city,
      nameCompany: temp[0],
      company: undefined,
      //profession: prof,
    }

    this.personService.modifyPerson(person, this.id).subscribe((personResponse => {
      this.createEvent.emit(personResponse);
      this.modifyPerson.reset();
    }))
    this.router.navigate(['annuairePersons']);
  }
}
