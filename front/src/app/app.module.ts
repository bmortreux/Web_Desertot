import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddCompanyComponent } from './add/add-company/add-company.component';
import { AnnuaireComponent } from './annuaire/annuaire-person/annuaire.component';
import { AddPersonsComponent } from './add/add-persons/add-persons.component';
import { ModifyPersonComponent } from './modify/modify-person/modify-person.component';
import { AnnuaireCompaniesComponent } from './annuaire/annuaire-companies/annuaire-companies.component';
import { ModifyCompanyComponent } from './modify/modify-company/modify-company.component';
import { SearchPersonComponent } from './search-person/search-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddCompanyComponent,
    AnnuaireComponent,
    AddPersonsComponent,
    ModifyPersonComponent,
    AnnuaireCompaniesComponent,
    ModifyCompanyComponent,
    SearchPersonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
