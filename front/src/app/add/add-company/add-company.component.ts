import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompaniesService} from "../../services/companies.service";
import {Companies} from "../../models/companies/companies.model";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public createCompany: FormGroup;

  @Output() createEvent = new EventEmitter<Companies>();

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
    const company: Companies = {
      name: companyData.name,
      city: companyData.city,
      phone: companyData.phone,
      turnover: companyData.turnover,
    }

    this.companiesService.createCompany(company).subscribe((companyResponse) => {
         this.createEvent.emit(companyResponse);
         this.createCompany.reset();
        this.router.navigate(['annuaireCompanies']);
    });
  }
}
