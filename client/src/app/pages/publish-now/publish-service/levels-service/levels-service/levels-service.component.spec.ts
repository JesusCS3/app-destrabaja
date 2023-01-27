import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsServiceComponent } from './levels-service.component';

describe('LevelsServiceComponent', () => {
  let component: LevelsServiceComponent;
  let fixture: ComponentFixture<LevelsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
