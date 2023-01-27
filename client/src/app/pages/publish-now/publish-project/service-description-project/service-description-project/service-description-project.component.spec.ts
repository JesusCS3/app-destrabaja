import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDescriptionProjectComponent } from './service-description-project.component';

describe('ServiceDescriptionProjectComponent', () => {
  let component: ServiceDescriptionProjectComponent;
  let fixture: ComponentFixture<ServiceDescriptionProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDescriptionProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDescriptionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
