import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { initialPlan, plusPlan, premiumPlan } from '../../models/levels-service/levels-service.model';

@Injectable({
  providedIn: 'root'
})
export class LevelsServiceService {

  initialPlan:initialPlan [] = [];
  plusPlan:plusPlan[] = [];
  premiumPlan:premiumPlan[] = [];

  /* *** send information from levels service *** */

  /* *** initial plan *** */
  initialPlanName:string;
  private initialPlanNameSubject = new Subject<string>();
  initialPlanNameObservable = this.initialPlanNameSubject.asObservable();

  initialPlanNameData(initialPlanName: string){
    this.initialPlanName = initialPlanName;
    this.initialPlanNameSubject.next(initialPlanName);
  }

  deliveryTimeInitialPlan: number;
  private deliveryTimeInitialPlanSubject = new Subject<number>();
  deliveryTimeInitialPlanObservable = this.deliveryTimeInitialPlanSubject.asObservable();

  deliveryTimeInitialPlanData(deliveryTimeInitialPlan: number){
    this.deliveryTimeInitialPlan = deliveryTimeInitialPlan;
    this.deliveryTimeInitialPlanSubject.next(deliveryTimeInitialPlan);
  }
  
  commentInitialPlan: string;
  private commentInitialPlanSubject = new Subject<string>();
  commentInitialPlanObservable = this.commentInitialPlanSubject.asObservable();

  commentInitialPlanData(commentInitialPlan: string){
    this.commentInitialPlan = commentInitialPlan;
    this.commentInitialPlanSubject.next(commentInitialPlan);
  }

  priceInitialPlan: number;
  private priceInitialPlanSubject = new Subject<number>();
  priceInitialPlanObservable = this.priceInitialPlanSubject.asObservable();

  priceInitialPlanData(priceInitialPlan: number){
    this.priceInitialPlan = priceInitialPlan;
    this.priceInitialPlanSubject.next(priceInitialPlan);
  }
  priceClientInitialPlan: number;
  private priceClientInitialPlanSubject = new Subject<number>();
  priceClientInitialPlanObservable = this.priceClientInitialPlanSubject.asObservable();

  priceClientInitialPlanData(priceClientInitialPlan: number){
    this.priceClientInitialPlan = priceClientInitialPlan;
    this.priceClientInitialPlanSubject.next(priceClientInitialPlan);
  }

  /* *** save information initial plan *** */
  saveInitialPlan(){
    let initialPlanLevel = new initialPlan(this.initialPlanName, this.deliveryTimeInitialPlan, this.commentInitialPlan,
      this.priceInitialPlan, this.priceClientInitialPlan);
    this.initialPlan.push(initialPlanLevel);
  }

  /* *** delete information *** */
  deleteInitialPlan(initialPlan:initialPlan){
    const aLength: number = this.initialPlan.length;
    this.initialPlan.splice(0, aLength);
  }

  /* *** plus plan *** */
  plusPlanName:string;
  private plusPlanNameSubject = new Subject<string>();
  plusPlanNameObservable = this.plusPlanNameSubject.asObservable();

  plusPlanNameData(plusPlanName: string){
    this.plusPlanName = plusPlanName;
    this.plusPlanNameSubject.next(plusPlanName);
  }

  deliveryTimePlusPlan: number;
  private deliveryTimePlusPlanSubject = new Subject<number>();
  deliveryTimePlusPlanObservable = this.deliveryTimePlusPlanSubject.asObservable();

  deliveryTimePlusPlanData(deliveryTimePlusPlan: number){
    this.deliveryTimePlusPlan = deliveryTimePlusPlan;
    this.deliveryTimePlusPlanSubject.next(deliveryTimePlusPlan);
  }

  commentPlusPlan: string;
  private commentPlusPlanSubject = new Subject<string>();
  commentPlusPlanObservable = this.commentPlusPlanSubject.asObservable();

  commentPlusPlanData(commentPlusPlan: string){
    this.commentPlusPlan = commentPlusPlan;
    this.commentPlusPlanSubject.next(commentPlusPlan);
  }

  pricePlusPlan: number;
  private pricePlusPlanSubject = new Subject<number>();
  pricePlusPlanObservable = this.pricePlusPlanSubject.asObservable();

  pricePlusPlanData(pricePlusPlan: number){
    this.pricePlusPlan = pricePlusPlan;
    this.pricePlusPlanSubject.next(pricePlusPlan);
  }
  
  priceClientPlusPlan: number;
  private priceClientPlusPlanSubject = new Subject<number>();
  priceClientPlusPlanObservable = this.priceClientPlusPlanSubject.asObservable();

  priceClientPlusPlanData(priceClientPlusPlan: number){
    this.priceClientPlusPlan = priceClientPlusPlan;
    this.priceClientPlusPlanSubject.next(priceClientPlusPlan);
  }

  /* *** save information plus plan *** */
  savePlusPlan(){
    let plusPlanLevel = new plusPlan(this.plusPlanName, this.deliveryTimePlusPlan, this.commentPlusPlan,
      this.pricePlusPlan, this.priceClientPlusPlan);
    this.plusPlan.push(plusPlanLevel);
  }

  /* *** delete information *** */
  deletePlusPlan(plusPlan:plusPlan){
    const aLength: number = this.plusPlan.length;
    this.plusPlan.splice(0, aLength);
  }

  /* *** premium plan *** */
  premiumPlanName:string;
  private premiumPlanNameSubject = new Subject<string>();
  premiumPlanNameObservable = this.premiumPlanNameSubject.asObservable();

  premiumPlanNameData(premiumPlanName: string){
    this.premiumPlanName = premiumPlanName;
    this.premiumPlanNameSubject.next(premiumPlanName);
  }

  deliveryTimePremiumPlan: number;
  private deliveryTimePremiumPlanSubject = new Subject<number>();
  deliveryTimePremiumPlanObservable = this.deliveryTimePremiumPlanSubject.asObservable();

  deliveryTimePremiumPlanData(deliveryTimePremiumPlan: number){
    this.deliveryTimePremiumPlan = deliveryTimePremiumPlan;
    this.deliveryTimePremiumPlanSubject.next(deliveryTimePremiumPlan);
  }

  commentPremiumPlan: string;
  private commentPremiumPlanSubject = new Subject<string>();
  commentPremiumPlanObservable = this.commentPremiumPlanSubject.asObservable();

  commentPremiumPlanData(commentPremiumPlan: string){
    this.commentPremiumPlan = commentPremiumPlan;
    this.commentPremiumPlanSubject.next(commentPremiumPlan);
  }

  pricePremiumPlan: number;
  private pricePremiumPlanSubject = new Subject<number>();
  pricePremiumPlanObservable = this.pricePremiumPlanSubject.asObservable();

  pricePremiumPlanData(pricePremiumPlan: number){
    this.pricePremiumPlan = pricePremiumPlan;
    this.pricePremiumPlanSubject.next(pricePremiumPlan);
  }

  priceClientPremiumPlan: number;
  private priceClientPremiumPlanSubject = new Subject<number>();
  priceClientPremiumPlanObservable = this.priceClientPremiumPlanSubject.asObservable();

  priceClientPremiumPlanData(priceClientPremiumPlan: number){
    this.priceClientPremiumPlan = priceClientPremiumPlan;
    this.priceClientPremiumPlanSubject.next(priceClientPremiumPlan);
  }

  /* *** save information premium plan *** */
  savePremiumPlan(){
    let premiumPlanLevel = new premiumPlan(this.premiumPlanName, this.deliveryTimePremiumPlan, this.commentPremiumPlan,
      this.pricePremiumPlan, this.priceClientPremiumPlan);
    this.premiumPlan.push(premiumPlanLevel);
  }

  /* *** delete information *** */
  deletePremiumPlan(premiumPlan:plusPlan){
    const aLength: number = this.premiumPlan.length;
    this.premiumPlan.splice(0, aLength);
  }

  /* *** clear information *** */
  clearInfoInitialPlan(){
    this.initialPlanName = '';
    this.deliveryTimeInitialPlan = 0;
    this.commentInitialPlan = '';
    this.priceInitialPlan = 0;
    this.priceClientInitialPlan = 0;
  }

  clearInfoPlusPlan(){
    /* plus plan */
    this.plusPlanName = '';
    this.deliveryTimePlusPlan = 0;
    this.commentPlusPlan = '';
    this.pricePlusPlan = 0;
    this.priceClientPlusPlan = 0;
  }

  clearInfoPremiumPlan(){
    /* premium plan */
    this.premiumPlanName = '';
    this.deliveryTimePremiumPlan = 0;
    this.commentPremiumPlan = '';
    this.pricePremiumPlan = 0;
    this.priceClientPremiumPlan = 0;
  }

}
