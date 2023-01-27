import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishProjectCardComponent } from './publish-project-card.component';

describe('PublishProjectCardComponent', () => {
  let component: PublishProjectCardComponent;
  let fixture: ComponentFixture<PublishProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishProjectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
