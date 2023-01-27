import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasServiceComponent } from './extras-service.component';

describe('ExtrasServiceComponent', () => {
  let component: ExtrasServiceComponent;
  let fixture: ComponentFixture<ExtrasServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
