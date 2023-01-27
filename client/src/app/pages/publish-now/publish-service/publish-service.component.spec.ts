import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishServiceComponent } from './publish-service.component';

describe('PublishServiceComponent', () => {
  let component: PublishServiceComponent;
  let fixture: ComponentFixture<PublishServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
