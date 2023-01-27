import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  /* *** user *** */
  public identity: any;

  constructor(
    private userService: UserService,
  ) {
    this.identity = this.userService.getIdentity();
   }

  ngOnInit(): void {

  }
}
