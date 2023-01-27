import { AuthService } from './../../services/auth/auth.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Event, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, DoCheck {

  // variables to get the current route
  currentRoute: string;
  noLoggedIn: boolean = false;
  
  /* *** there is a user logged in (false start to indicate that you are not logged in) *** */
  public identity: any;
  isLoggedIn: boolean = false;

  //attributes: any;

  constructor(
    private router: Router, 
    private AuthService: AuthService,
    private userService: UserService,
  ) {

    /* *** get the current route *** */
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
              //console.log(event);
            if((this.currentRoute === "/landing-page") || (this.currentRoute === "/")){
              this.noLoggedIn = true;
            }else if(this.currentRoute != "/landing-page"){
              this.noLoggedIn = false;
            }
        }


    });
  }

  //subscription: Subscription = new Subscription();

  ngOnInit(): void {
    /*this.subscription = this.AuthService.getSessionData().subscribe({
      next: (data) => {
        this.isLoggedIn = data.isLoggedIn;
      },
      error: (err) => {
        console.log(err);
      }
    });*/

    /* this.userService.getIdentity().subscribe({
      next: (data: any) => {
        this.identity = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });*/

    this.identity = this.userService.getIdentity();
  }

  ngDoCheck(): void {
    this.identity = this.userService.getIdentity();
  }

  /* sign out
  signOut(): void {
    Auth.signOut().then(() => {
      this.AuthService.removeDataLocally();
      this.router.navigate(['/']);
    }).catch(err => {
      alert(err.message || JSON.stringify(err));
    })
  } */

  /* *** signout *** */
  signout(){
    try{
      localStorage.clear();
      this.identity = null;
      Auth.signOut();
      this.router.navigate(['/']);
    }catch(err) {
      alert(err);
    };
  }
}
