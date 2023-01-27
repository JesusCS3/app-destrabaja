import { Injectable } from '@angular/core';
import { profileSettings } from '../models/profile-settings.model';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsService {

  /* variables for request */
  public url:string;
  //public identity:any;
  //public token:any;

  profileSettings:profileSettings;

  constructor(
    //private userService: UserService,
    public http: HttpClient,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    /* receive data */
    //this.identity = this.userService.getIdentity();
    //this.token = this.userService.getToken();
    this.url = GLOBAL.url;

    // customize default values of modals
		config.backdrop = 'static';
    config.centered = true;
  }

  saveProfile(token: any, profileSettings: profileSettings): Observable <any>{
    let params = JSON.stringify(profileSettings);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', token);
    
    return this.http.post(this.url + 'profile', params, {headers: headers});
  }

   getProfile(token: any, userId: any): Observable <any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', token);
    
    return this.http.get(this.url + 'get-profile/' + userId, {headers: headers});
   }

   updateProfile(token: any, profile: any) : Observable<any>{
    let params = JSON.stringify(profile);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', token);
    
    return this.http.put(this.url + 'update-profile/' + profile._id, params, {headers: headers});
  }

}
