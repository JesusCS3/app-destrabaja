import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishServiceCardComponent } from './publish-service-card.component';

describe('PublishServiceCardComponent', () => {
  let component: PublishServiceCardComponent;
  let fixture: ComponentFixture<PublishServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishServiceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
