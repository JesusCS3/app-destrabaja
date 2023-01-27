import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { descriptionService } from '../models/description-service.model';

@Injectable({
  providedIn: 'root'
})
export class DescriptionServiceService {

  descriptionService: descriptionService [] = [];

  /* *** send information from service description service *** */
  shortDescription: string;
  private shortDescriptionSubject = new Subject<string>();
  shortDescriptionObservable = this.shortDescriptionSubject.asObservable();

  shortDescriptionData(shortDescription: string){
    this.shortDescription = shortDescription;
    this.shortDescriptionSubject.next(shortDescription);
  }

  longDescription: string;
  private longDescriptionSubject = new Subject<string>();
  longDescriptionObservable = this.longDescriptionSubject.asObservable();

  longDescriptionData(longDescription: string){
    this.longDescription = longDescription;
    this.longDescriptionSubject.next(longDescription);
  }

  /* *** save information *** */
  save(){
    let serviceDescription = new descriptionService(this.shortDescription, this.longDescription);
    this.descriptionService.push(serviceDescription);
  }

  /* *** delete information *** */
  delete(){
    const aLength: number = this.descriptionService.length;
    this.descriptionService.splice(0, aLength);
  }

  /* *** clear information *** */
  clearInfo(){
    this.shortDescription = '';
    this.longDescription =  '';
  }
  
}
