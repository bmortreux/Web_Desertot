import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireCompaniesComponent } from './annuaire-companies.component';

describe('AnnuaireCompaniesComponent', () => {
  let component: AnnuaireCompaniesComponent;
  let fixture: ComponentFixture<AnnuaireCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuaireCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
