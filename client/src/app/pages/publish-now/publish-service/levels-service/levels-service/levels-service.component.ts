import { Component, OnInit } from '@angular/core';
import { deliverables } from '../models/deliverables/deliverables.model';
import { DeliverablesService } from '../services/deliverables/deliverables.service';
import { LevelsServiceService } from '../services/levels-service/levels-service.service';

@Component({
  selector: 'app-levels-service',
  templateUrl: './levels-service.component.html',
  styleUrls: ['./levels-service.component.css']
})
export class LevelsServiceComponent implements OnInit {

  /* variable to receive deliverables */
  deliverables:deliverables[] = [];

  /* variables to disable plans*/
  checkboxPlusPlan:boolean = false;
  checkboxPremiumPlan:boolean = false;

  /* disabled price inputs */
  readOnlyPriceClient:boolean = false;
  readOnlyPrice:boolean = false;
  readOnlyPricePlusClient:boolean = false;
  readOnlyPricePlus:boolean = false;
  readOnlyPricePremiumClient:boolean = false;
  readOnlyPricePremium:boolean = false;

  /* variables for deliverables */
  deliverableInput:string;
  deliverableInputInitialPlan: boolean;
  deliverableInputPlusPlan: boolean;
  deliverableInputPremiumPlan: boolean;

  /* variables for levels service */
  /* initial plan */  
  initialPlanName:string;
  deliveryTimeInitialPlan: number;
  commentInitialPlan: string;
  priceInitialPlan: number;
  priceClientInitialPlan: number;
  /* plus plan */
  plusPlanName:string;
  deliveryTimePlusPlan: number;
  commentPlusPlan: string;
  pricePlusPlan: number;
  priceClientPlusPlan: number;
  /* premium plan */
  premiumPlanName:string;
  deliveryTimePremiumPlan: number;
  commentPremiumPlan: string;
  pricePremiumPlan: number;
  priceClientPremiumPlan: number;


  constructor(
    private deliverableService:DeliverablesService, 
    private levelsServiceService: LevelsServiceService
  ) { }

  ngOnInit(): void {
    /* fill with previously saved values */
    this.receiveInfo();

    /* receive deliverables */
    this.deliverables = this.deliverableService.deliverables;

    /* initial plan */
    this.levelsServiceService.initialPlanNameObservable.subscribe(response => {
      this.initialPlanName = response;
    });

    this.levelsServiceService.deliveryTimeInitialPlanObservable.subscribe(response => {
      this.deliveryTimeInitialPlan = response;
    });

    this.levelsServiceService.commentInitialPlanObservable.subscribe(response => {
      this.commentInitialPlan = response;
    });

    this.levelsServiceService.priceInitialPlanObservable.subscribe(response => {
      this.priceInitialPlan = response;
    });

    this.levelsServiceService.priceClientInitialPlanObservable.subscribe(response => {
      this.priceClientInitialPlan = response;
    });

    /* plus plan */
    this.levelsServiceService.plusPlanNameObservable.subscribe(response => {
      this.plusPlanName = response;
    });

    this.levelsServiceService.deliveryTimePlusPlanObservable.subscribe(response => {
      this.deliveryTimePlusPlan = response;
    });

    this.levelsServiceService.commentPlusPlanObservable.subscribe(response => {
      this.commentPlusPlan = response;
    });

    this.levelsServiceService.pricePlusPlanObservable.subscribe(response => {
      this.pricePlusPlan = response;
    });

    this.levelsServiceService.priceClientPlusPlanObservable.subscribe(response => {
      this.priceClientPlusPlan = response;
    });

    /* premium plan */
    this.levelsServiceService.premiumPlanNameObservable.subscribe(response => {
      this.premiumPlanName = response;
    });

    this.levelsServiceService.deliveryTimePremiumPlanObservable.subscribe(response => {
      this.deliveryTimePremiumPlan = response;
    });

    this.levelsServiceService.commentPremiumPlanObservable.subscribe(response => {
      this.commentPremiumPlan = response;
    });

    this.levelsServiceService.pricePremiumPlanObservable.subscribe(response => {
      this.pricePremiumPlan = response;
    });

    this.levelsServiceService.priceClientPremiumPlanObservable.subscribe(response => {
      this.priceClientPremiumPlan = response;
    });

  }

  /* fill with previously saved values */
  receiveInfo(){
  /* initial plan */  
  this.initialPlanName = this.levelsServiceService.initialPlanName;
  this.deliveryTimeInitialPlan = this.levelsServiceService.deliveryTimeInitialPlan;
  this.commentInitialPlan = this.levelsServiceService.commentInitialPlan;
  this.priceInitialPlan = this.levelsServiceService.priceInitialPlan;
  this.priceClientInitialPlan = this.levelsServiceService.priceClientInitialPlan;
  /* plus plan */
  this.plusPlanName = this.levelsServiceService.plusPlanName;
  this.deliveryTimePlusPlan = this.levelsServiceService.deliveryTimePlusPlan;
  this.commentPlusPlan = this.levelsServiceService.commentPlusPlan;
  this.pricePlusPlan = this.levelsServiceService.pricePlusPlan;
  this.priceClientPlusPlan = this.levelsServiceService.priceClientPlusPlan;
  /* premium plan */
  this.premiumPlanName = this.levelsServiceService.premiumPlanName;
  this.deliveryTimePremiumPlan = this.levelsServiceService.deliveryTimePremiumPlan;
  this.commentPremiumPlan = this.levelsServiceService.commentPremiumPlan;
  this.pricePremiumPlan = this.levelsServiceService.pricePremiumPlan;
  this.priceClientPremiumPlan = this.levelsServiceService.priceClientPremiumPlan;

  /* enable plus plan */
  if(this.plusPlanName != undefined || this.plusPlanName != null){
    this.checkboxPlusPlan = true;
  }
  /* disble plus plan */
  if(this.plusPlanName === ''){
    this.checkboxPlusPlan = false;
  }
  /* enable premium plan */
  if(this.premiumPlanName != undefined || this.premiumPlanName != null){
    this.checkboxPremiumPlan = true;
  }
  /* disble plus plan */
  if(this.premiumPlanName === ''){
    this.checkboxPremiumPlan = false;
  }

  }

  /* delete deliverables information */
  deleteDeliverable(deliverables:deliverables){
    this.deliverableService.delete(deliverables);
  }

  /* save deliverables information */
  addDeliverable(){
    this.deliverableService.deliverables.push(new deliverables(this.deliverableInput,
    this.deliverableInputInitialPlan,this.deliverableInputPlusPlan,this.deliverableInputPremiumPlan));

    /* clear input and checkbox to add deliverable */
    this.deliverableInput = '';
    this.deliverableInputInitialPlan = false;
    this.deliverableInputPlusPlan = false;
    this.deliverableInputPremiumPlan = false;
  }

  /* send info initial plan */
  sendInitialPlanName(initialPlanName: any) {
    this.levelsServiceService.initialPlanNameData(initialPlanName.target.value);
  }

  sendDeliveryTimeInitialPlan(deliveryTimeInitialPlan: any) {
    this.levelsServiceService.deliveryTimeInitialPlanData(deliveryTimeInitialPlan.target.value);
  }

  sendCommentInitialPlan(commentInitialPlan: any) {
    this.levelsServiceService.commentInitialPlanData(commentInitialPlan.target.value);
  }

  sendPriceInitialPlan(priceInitialPlan: any) {
    this.levelsServiceService.priceInitialPlanData(priceInitialPlan.target.value);
  }

  sendPriceClientInitialPlan(priceClientInitialPlan: any) {
    this.levelsServiceService.priceClientInitialPlanData(priceClientInitialPlan.target.value);
  }

  /* send info plus plan */
  sendPlusPlanName(plusPlanName: any) {
    this.levelsServiceService.plusPlanNameData(plusPlanName.target.value);
  }

  sendDeliveryTimePlusPlan(deliveryTimePlusPlan: any) {
    this.levelsServiceService.deliveryTimePlusPlanData(deliveryTimePlusPlan.target.value);
  }

  sendCommentPlusPlan(commentPlusPlan: any) {
    this.levelsServiceService.commentPlusPlanData(commentPlusPlan.target.value);
  }

  sendPricePlusPlan(pricePlusPlan: any) {
    this.levelsServiceService.pricePlusPlanData(pricePlusPlan.target.value);
  }

  sendPriceClientPlusPlan(priceClientPlusPlan: any) {
    this.levelsServiceService.priceClientPlusPlanData(priceClientPlusPlan.target.value);
  }

  /* send info premium plan */
  sendPremiumPlanName(premiumPlanName: any) {
    this.levelsServiceService.premiumPlanNameData(premiumPlanName.target.value);
  }

  sendDeliveryTimePremiumPlan(deliveryTimePremiumPlan: any) {
    this.levelsServiceService.deliveryTimePremiumPlanData(deliveryTimePremiumPlan.target.value);
  }

  sendCommentPremiumPlan(commentPremiumPlan: any) {
    this.levelsServiceService.commentPremiumPlanData(commentPremiumPlan.target.value);
  }

  sendPricePremiumPlan(pricePremiumPlan: any) {
    this.levelsServiceService.pricePremiumPlanData(pricePremiumPlan.target.value);
  }

  sendPriceClientPremiumPlan(priceClientPremiumPlan: any) {
    this.levelsServiceService.priceClientPremiumPlanData(priceClientPremiumPlan.target.value);
  }

  /* calculate the customer price */
  clientPrice(){
    if(this.priceInitialPlan != undefined){
      this.priceClientInitialPlan = Math.ceil(this.priceInitialPlan * 1.376263);
      this.levelsServiceService.priceClientInitialPlanData(this.priceClientInitialPlan);
      this.readOnlyPriceClient = true;
    }

    if(this.priceClientInitialPlan === 0){
      this.readOnlyPriceClient = false;
    }
  }

  clientPricePlus(){
    if(this.pricePlusPlan != undefined){
      this.priceClientPlusPlan = Math.ceil(this.pricePlusPlan * 1.376263);
      this.levelsServiceService.priceClientPlusPlanData(this.priceClientPlusPlan);
      this.readOnlyPricePlusClient = true;
    }

    if(this.priceClientPlusPlan === 0){
      this.readOnlyPricePlusClient = false;
    }
  }

  clientPricePremium(){
    if(this.pricePremiumPlan != undefined){
      this.priceClientPremiumPlan = Math.ceil(this.pricePremiumPlan * 1.376263);
      this.levelsServiceService.priceClientPremiumPlanData(this.priceClientPremiumPlan);
      this.readOnlyPricePremiumClient = true;
    }

    if(this.priceClientPremiumPlan === 0){
      this.readOnlyPricePremiumClient = false;
    }
  }

  /* calculate price */
  price(){
    if(this.priceClientInitialPlan != undefined){
      this.priceInitialPlan = Math.ceil(this.priceClientInitialPlan / 1.376263);
      this.levelsServiceService.priceInitialPlanData(this.priceInitialPlan);
      this.readOnlyPrice = true;
    }

    if(this.priceInitialPlan === 0){
      this.readOnlyPrice = false;
    }
  }

  pricePlus(){
    if(this.priceClientPlusPlan != undefined){
      this.pricePlusPlan = Math.ceil(this.priceClientPlusPlan / 1.376263);
      this.levelsServiceService.pricePlusPlanData(this.pricePlusPlan);
      this.readOnlyPricePlus = true;
    }

    if(this.pricePlusPlan === 0){
      this.readOnlyPricePlus = false;
    }
  }

  pricePremium(){
    if(this.priceClientPremiumPlan != undefined){
      this.pricePremiumPlan = Math.ceil(this.priceClientPremiumPlan / 1.376263);
      this.levelsServiceService.pricePremiumPlanData(this.pricePremiumPlan);
      this.readOnlyPricePremium = true;
    }

    if(this.pricePremiumPlan === 0){
      this.readOnlyPricePremium = false;
    }
  }

  /* clear input and checkbox to plus plan */
  clearPlusPlan(){
    if(this.checkboxPlusPlan === false){
      this.plusPlanName = '';
      this.deliverableInputPlusPlan = false;
      this.deliveryTimePlusPlan = 0;
      this.commentPlusPlan = '';
      this.pricePlusPlan = 0;
      this.priceClientPlusPlan = 0;
    }
  }

  /* clear input and checkbox to plus plan */
  clearPremiumPlan(){
    if(this.checkboxPremiumPlan === false){
      this.premiumPlanName = '';
      this.deliverableInputPremiumPlan = false;
      this.deliveryTimePremiumPlan = 0;
      this.commentPremiumPlan = '';
      this.pricePremiumPlan = 0;
      this.priceClientPremiumPlan = 0;
    }
  }

  /* *** clear information *** */
  clearInfoPlusPlan: any;
  clearInfoPremiumPlan: any;

  clearInfoPlus(){
    this.clearInfoPlusPlan = this.levelsServiceService.clearInfoPlusPlan(); 
  }

  clearInfoPremium(){
    this.clearInfoPremiumPlan = this.levelsServiceService.clearInfoPremiumPlan(); 
  }

}
