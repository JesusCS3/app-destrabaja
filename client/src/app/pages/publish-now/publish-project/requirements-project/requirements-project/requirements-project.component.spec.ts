import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsProjectComponent } from './requirements-project.component';

describe('RequirementsProjectComponent', () => {
  let component: RequirementsProjectComponent;
  let fixture: ComponentFixture<RequirementsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
