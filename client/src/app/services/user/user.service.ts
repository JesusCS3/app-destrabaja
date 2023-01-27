import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* variables for request */
  public url:string;
  public identity:any;
  public token:any;
  public stats: any;

  constructor(
    public http: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  signupUser(user: user) : Observable <any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    
    return this.http.post(this.url + 'signup', params, {headers: headers});
  }

  signinUser(user: user, gettoken: string | null | undefined) : Observable <any>{
    if (gettoken != null){
      user.gettoken = gettoken;
    }

    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'signin', params, {headers: headers});
  }

  getIdentity(){
    let identityObject = localStorage.getItem('identity');

    if(identityObject){
      let identity = JSON.parse(identityObject);
      this.identity = identity;
    }else{
      this.identity = null;
    }

    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');

    if(token){
      this.token = token;
    }else{
      this.token = null;
    }

    return this.token;
  }

  getStats(){
    let statsObject = localStorage.getItem('stats');

    if(statsObject){
      let stats = JSON.parse(statsObject);
      this.stats = stats;
    }else{
      this.stats = null;
    }

    return this.stats;
  }

  getCounters(userId: string | null | undefined) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.getToken());

    if (userId != null){
      return this.http.get(this.url + 'counters/' + userId, {headers: headers});
    }else{
      return this.http.get(this.url + 'counters', {headers: headers});
    }
  }

  updateUser(user: any) : Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.getToken());
    
    return this.http.put(this.url + 'update-user/' + user._id, params, {headers: headers});
  }

}

