// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonnesService} from "./services/personnes.service";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front';

  // @ts-ignore
  public search: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private personsService : PersonnesService,
              private router: Router) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.search = this.formBuilder.group({
      searchPerson: ''
    })
  }

  onSubmit(searchData: any) {
    this.router.navigate(['search/', searchData.searchPerson]);
  }
}
