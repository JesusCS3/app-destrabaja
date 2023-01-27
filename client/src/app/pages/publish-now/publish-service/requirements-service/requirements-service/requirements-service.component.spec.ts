import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsServiceComponent } from './requirements-service.component';

describe('RequirementsServiceComponent', () => {
  let component: RequirementsServiceComponent;
  let fixture: ComponentFixture<RequirementsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementsServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
