// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {AddPersonsComponent} from "./add-persons/add-persons.component";
import {ModifyPersonComponent} from "./modify-person/modify-person.component";
import {AnnuaireComponent} from "./annuaire/annuaire.component";
import {AnnuaireCompaniesComponent} from "./annuaire-companies/annuaire-companies.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'addCompany', component: AddCompanyComponent},
  {path: 'addPersons', component: AddPersonsComponent},
  {path: 'annuairePersons/modifyPerson/:id', component: ModifyPersonComponent},
  {path: 'annuairePersons', component: AnnuaireComponent},
  {path: 'annuaireCompanies', component: AnnuaireCompaniesComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
