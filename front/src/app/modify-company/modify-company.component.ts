import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
// @ts-ignore
import {companies} from "../models/companies";
import {ActivatedRoute, Router} from "@angular/router";
import {CompaniesService} from "../services/companies.service";


@Component({
  selector: 'app-modify-company',
  templateUrl: './modify-company.component.html',
  styleUrls: ['./modify-company.component.css']
})
export class ModifyCompanyComponent implements OnInit {

  public id: string | null;

  public company: companies;

  public modifyCompany: FormGroup;

  @Output() createEvent = new EventEmitter<companies>();

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
              private router: Router, private companiesService: CompaniesService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.modifyCompany = this.formBuilder.group({
      id: 0,
      name: '',
      city: '',
      phone: '',
      turnover: 0,
    })
    this.company = {} as companies;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.companiesService.getCompany(this.id).subscribe((companiesResponse => {
      this.company = companiesResponse;
    }))
  }

  onSubmit(companyData: any) {
    if(companyData.name == '') {
      companyData.name = this.company.name;
    }
    if(companyData.phone == '') {
      companyData.phone = this.company.phone;
    }
    if(companyData.city == '') {
      companyData.city = this.company.city;
    }
    if(companyData.turnover == 0) {
      companyData.turnover = this.company.turnover;
    }

    const company: companies = {
      name: companyData.name,
      phone: companyData.phone,
      city: companyData.city,
      turnover: companyData.turnover,
    }

    // @ts-ignore
    this.companiesService.modifyCompany(company, this.id).subscribe((companyResponse => {
      this.createEvent.emit(companyResponse);
      this.modifyCompany.reset();
    }))
    this.router.navigate(['annuaireCompanies']);
  }
}
