import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { userModel } from 'src/app/models/userModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //save session details
  sessionDetails: BehaviorSubject<userModel> = new BehaviorSubject<userModel>(new userModel());

  constructor(private http: HttpClient) {
    this.verifyingSession();
  }

    // verifying session
    verifyingSession(){
      let data = localStorage.getItem("session-data");
      if(data){
        let objectData: userModel = JSON.parse(data);
        objectData.isLoggedIn = true;
        this.refreshSessionDetails(objectData);
      }
    }

    // refresh session data
    refreshSessionDetails(userModel: userModel){
      this.sessionDetails.next(userModel);
    }

    // convert session details to observable
    getSessionData(){
      return this.sessionDetails.asObservable();
    }

    // save session data in localStorage
    storeSessionDataLocally(userModel: userModel): Boolean{
      let sessionData = localStorage.getItem("session-data");
      if(sessionData){
        return false;
      }else{
        let dataString = JSON.stringify(userModel);
        localStorage.setItem("session-data", dataString);
        userModel.isLoggedIn = true;
        this.refreshSessionDetails(userModel);
        return true;
      }

    }

    // remove session data from localStorage
    removeDataLocally(){
      let sessionData = localStorage.removeItem("session-data");
      this.refreshSessionDetails(new userModel());
    }
}
