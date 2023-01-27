import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user/user.service';
import { profileSettings } from '../profile-settings/models/profile-settings.model';
import { ProfileSettingsService } from '../profile-settings/services/profile-settings.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.my-custom-class .tooltip-inner {
				background-color: #fff;
				font-size: 0.8rem;
        font-weight: bold;
        color: #425CC7;
        text-align: justify;
        padding: 10px;
        margin: 5px;
        max-width: 310px !important;
        box-shadow: rgba(0, 0, 0, 0.301) 0px 2px 4px 0px, rgba(0, 0, 0, 0.301) 0px 2px 16px 0px !important;
			}
			.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
				border-right-color: #fff;
			}
			.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
				border-left-color: #fff;
			}
			.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
				border-top-color: #fff;
			}
			.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
				border-bottom-color: #fff;
			}
		`,
  ]
})
export class ProfileInformationComponent implements OnInit {

  /* variables for request */
  public url:string;
  public identity:any;
  public token:any;
  public profile:any;
  public profileSettings:profileSettings;

  constructor(
    private router: Router,
    private profileSettingsService:ProfileSettingsService,
    private userService: UserService
  ) { 
    /* receive data */
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
    this.profileSettings = this.getProfile();
  }

  ngOnInit(): void {
    //this.getProfile();
  }

  /* *** get profile *** */
  getProfile(){
    this.profileSettingsService.getProfile(this.token, this.identity._id).subscribe({      
      next: (response: any) => {
        if(response.profile){
          this.profileSettings = response.profile;
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    return this.profileSettings;
  }

}
