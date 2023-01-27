import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoProjectComponent } from './general-info-project.component';

describe('GeneralInfoProjectComponent', () => {
  let component: GeneralInfoProjectComponent;
  let fixture: ComponentFixture<GeneralInfoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
