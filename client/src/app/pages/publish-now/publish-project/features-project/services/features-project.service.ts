import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { featuresProject } from '../models/features-project.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesProjectService {

  featuresProject: featuresProject [] = [];

  /* *** send information from features project *** */
  budget: number;
  private budgetSubject = new Subject<number>();
  budgetObservable = this.budgetSubject.asObservable();

  budgetData(budget: number){
    this.budget = budget;
    this.budgetSubject.next(budget);
  }

  deliveryDate: string;
  private deliveryDateSubject = new Subject<string>();
  deliveryDateObservable = this.deliveryDateSubject.asObservable();

  deliveryDateData(deliveryDate: string){
    this.deliveryDate = deliveryDate;
    this.deliveryDateSubject.next(deliveryDate);
  }

  /* *** save information *** */
  save(){
    let projectFeatures = new featuresProject(this.budget, this.deliveryDate);
    this.featuresProject.push(projectFeatures);
  }

  /* *** delete information *** */
  delete(){
    const aLength: number = this.featuresProject.length;
    this.featuresProject.splice(0, aLength);
  }

  /* *** clear information *** */
  clearInfo(){
    this.budget = 0;
    this.deliveryDate =  '';
  }

}
