import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSettingsComponent } from './edit-profile-settings.component';

describe('EditProfileSettingsComponent', () => {
  let component: EditProfileSettingsComponent;
  let fixture: ComponentFixture<EditProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
