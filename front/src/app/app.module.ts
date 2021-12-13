import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AddPersonsComponent } from './add-persons/add-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddCompanyComponent,
    AnnuaireComponent,
    AddPersonsComponent,
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
