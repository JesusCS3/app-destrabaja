import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPublishedComponent } from './services-published.component';

describe('ServicesPublishedComponent', () => {
  let component: ServicesPublishedComponent;
  let fixture: ComponentFixture<ServicesPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPublishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
