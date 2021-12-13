// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {AddPersonsComponent} from "./add-persons/add-persons.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'addCompany', component: AddCompanyComponent},
  {path: 'addPersons', component: AddPersonsComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
