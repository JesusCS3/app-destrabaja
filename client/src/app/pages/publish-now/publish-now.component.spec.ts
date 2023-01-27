import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNowComponent } from './publish-now.component';

describe('PublishNowComponent', () => {
  let component: PublishNowComponent;
  let fixture: ComponentFixture<PublishNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
