import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompaniesService} from "../../services/companies.service";
// @ts-ignore
import {companies} from "../../models/companies";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  // @ts-ignore
  public createCompany: FormGroup;

  @Output() createEvent = new EventEmitter<companies>();

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private companiesService: CompaniesService,
              private router: Router) {
    this.createCompany = this.formBuilder.group({
      name: '',
      city: '',
      phone: '',
      turnover: '',
      id: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(companyData: any) {
    const company: companies = {
      name: companyData.name,
      city: companyData.city,
      phone: companyData.phone,
      turnover: companyData.turnover,
    }

    this.companiesService.createCompany(company).subscribe((companyResponse) => {
         this.createEvent.emit(companyResponse);
         this.createCompany.reset();
    });
    this.router.navigate(['annuaireCompanies']);
  }
}
