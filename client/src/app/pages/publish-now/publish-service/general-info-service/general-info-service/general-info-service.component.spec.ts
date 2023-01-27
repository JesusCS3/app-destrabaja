import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoServiceComponent } from './general-info-service.component';

describe('GeneralInfoServiceComponent', () => {
  let component: GeneralInfoServiceComponent;
  let fixture: ComponentFixture<GeneralInfoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
