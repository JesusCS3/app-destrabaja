import { Component, OnInit } from '@angular/core';
import { extraService } from '../models/extras-service.model';
import { ExtrasServiceService } from '../services/extras-service.service';

@Component({
  selector: 'app-extras-service',
  templateUrl: './extras-service.component.html',
  styleUrls: ['./extras-service.component.css']
})
export class ExtrasServiceComponent implements OnInit {

  /***** variables for save information *****/
  extraService:extraService[] = [];

  /* disabled price inputs */
  readOnlyPriceClientExtra:boolean = false;
  readOnlyPriceExtra:boolean = false;
  readOnlyPricePlusClientExtra:boolean = false;
  readOnlyPricePlusExtra:boolean = false;
  readOnlyPricePremiumClientExtra:boolean = false;
  readOnlyPricePremiumExtra:boolean = false;

  /* variables for extras service */

   nameExtra:string;

   /* initial plans */
   initialPlanExtra: boolean;
   deliveryTimeInitialPlanExtra: number;
   priceInitialPlanExtra: number;
   priceClientInitialPlanExtra: number;

   /* plus plan */
   plusPlanExtra: boolean;
   deliveryTimePlusPlanExtra: number;
   pricePlusPlanExtra: number;
   priceClientPlusPlanExtra: number;
 
   /* premium plan */
   premiumPlanExtra: boolean;
   deliveryTimePremiumPlanExtra: number;
   pricePremiumPlanExtra: number;
   priceClientPremiumPlanExtra: number;

   /* edit extras */
  editExtras: boolean = false;


  constructor(
    private extrasServiceService:ExtrasServiceService
  ) { }

  ngOnInit(): void {

    /* receive info from extras service */
    this.extraService = this.extrasServiceService.extraService;

    /* fill with previously saved values */
    this.receiveInfo();

    /* name extra */
    this.extrasServiceService.nameExtraObservable.subscribe(response => {
      this.nameExtra = response;
    });

    /* initial plan */

    this.extrasServiceService.initialPlanExtraObservable.subscribe(response => {
      this.initialPlanExtra = response;
    });

    this.extrasServiceService.deliveryTimeInitialPlanExtraObservable.subscribe(response => {
      this.deliveryTimeInitialPlanExtra = response;
    });

    this.extrasServiceService.priceInitialPlanExtraObservable.subscribe(response => {
      this.priceInitialPlanExtra = response;
    });

    this.extrasServiceService.priceClientInitialPlanExtraObservable.subscribe(response => {
      this.priceClientInitialPlanExtra = response;
    });

    /* plus plan */

    this.extrasServiceService.plusPlanExtraObservable.subscribe(response => {
      this.plusPlanExtra = response;
    });

    this.extrasServiceService.deliveryTimePlusPlanExtraObservable.subscribe(response => {
      this.deliveryTimePlusPlanExtra = response;
    });

    this.extrasServiceService.pricePlusPlanExtraObservable.subscribe(response => {
      this.pricePlusPlanExtra = response;
    });

    this.extrasServiceService.priceClientPlusPlanExtraObservable.subscribe(response => {
      this.priceClientPlusPlanExtra = response;
    });

    /* premium plan */

    this.extrasServiceService.premiumPlanExtraObservable.subscribe(response => {
      this.premiumPlanExtra = response;
    });

    this.extrasServiceService.deliveryTimePremiumPlanExtraObservable.subscribe(response => {
      this.deliveryTimePremiumPlanExtra = response;
    });

    this.extrasServiceService.pricePremiumPlanExtraObservable.subscribe(response => {
      this.pricePremiumPlanExtra = response;
    });

    this.extrasServiceService.priceClientPremiumPlanExtraObservable.subscribe(response => {
      this.priceClientPremiumPlanExtra = response;
    });
  }

  /* fill with previously saved values */
  receiveInfo(){
  /* name extra */
  this.nameExtra = this.extrasServiceService.nameExtra;
  /* initial plan */  
  this.initialPlanExtra = this.extrasServiceService.initialPlanExtra;
  this.deliveryTimeInitialPlanExtra = this.extrasServiceService.deliveryTimeInitialPlanExtra;
  this.priceInitialPlanExtra = this.extrasServiceService.priceInitialPlanExtra;
  this.priceClientInitialPlanExtra = this.extrasServiceService.priceClientInitialPlanExtra;
  /* plus plan */
  this.plusPlanExtra = this.extrasServiceService.plusPlanExtra;
  this.deliveryTimePlusPlanExtra = this.extrasServiceService.deliveryTimePlusPlanExtra;
  this.pricePlusPlanExtra = this.extrasServiceService.pricePlusPlanExtra;
  this.priceClientPlusPlanExtra = this.extrasServiceService.priceClientPlusPlanExtra;
  /* premium plan */
  this.premiumPlanExtra = this.extrasServiceService.premiumPlanExtra;
  this.deliveryTimePremiumPlanExtra = this.extrasServiceService.deliveryTimePremiumPlanExtra;
  this.pricePremiumPlanExtra = this.extrasServiceService.pricePremiumPlanExtra;
  this.priceClientPremiumPlanExtra = this.extrasServiceService.priceClientPremiumPlanExtra;

  }

  /* send info name extra */
  sendNameExtra(nameExtra: any) {
    this.extrasServiceService.nameExtraData(nameExtra.target.value);
  }

  /* send info initial plan extra */

  sendInitialPlanExtra() {
    this.extrasServiceService.initialPlanExtraData(this.initialPlanExtra);
  }

  sendDeliveryTimeInitialPlanExtra(deliveryTimeInitialPlanExtra: any) {
    this.extrasServiceService.deliveryTimeInitialPlanExtraData(deliveryTimeInitialPlanExtra.target.value);
  }

  sendPriceInitialPlanExtra(priceInitialPlanExtra: any) {
    this.extrasServiceService.priceInitialPlanExtraData(priceInitialPlanExtra.target.value);
  }

  sendPriceClientInitialPlanExtra(priceClientInitialPlanExtra: any) {
    this.extrasServiceService.priceClientInitialPlanExtraData(priceClientInitialPlanExtra.target.value);
  }

  /* send info plus plan extra*/

  sendPlusPlanExtra() {
    this.extrasServiceService.plusPlanExtraData(this.plusPlanExtra);
  }

  sendDeliveryTimePlusPlanExtra(deliveryTimePlusPlanExtra: any) {
    this.extrasServiceService.deliveryTimePlusPlanExtraData(deliveryTimePlusPlanExtra.target.value);
  }

  sendPricePlusPlanExtra(pricePlusPlanExtra: any) {
    this.extrasServiceService.pricePlusPlanExtraData(pricePlusPlanExtra.target.value);
  }

  sendPriceClientPlusPlanExtra(priceClientPlusPlanExtra: any) {
    this.extrasServiceService.priceClientPlusPlanExtraData(priceClientPlusPlanExtra.target.value);
  }

  /* send info premium plan extra*/

  sendPremiumPlanExtra() {
    this.extrasServiceService.premiumPlanExtraData(this.premiumPlanExtra);
  }

  sendDeliveryTimePremiumPlanExtra(deliveryTimePremiumPlanExtra: any) {
    this.extrasServiceService.deliveryTimePremiumPlanExtraData(deliveryTimePremiumPlanExtra.target.value);
  }

  sendPricePremiumPlanExtra(pricePremiumPlanExtra: any) {
    this.extrasServiceService.pricePremiumPlanExtraData(pricePremiumPlanExtra.target.value);
  }

  sendPriceClientPremiumPlanExtra(priceClientPremiumPlanExtra: any) {
    this.extrasServiceService.priceClientPremiumPlanExtraData(priceClientPremiumPlanExtra.target.value);
  }

  /* calculate the customer price */
  clientPriceInitialPlanExtra(){
    if(this.priceInitialPlanExtra != undefined){
      this.priceClientInitialPlanExtra = Math.ceil(this.priceInitialPlanExtra * 1.376263);
      this.extrasServiceService.priceClientInitialPlanExtraData(this.priceClientInitialPlanExtra);
      this.readOnlyPriceClientExtra = true;
    }

    if(this.priceClientInitialPlanExtra === 0){
      this.readOnlyPriceClientExtra = false;
    }
  }

  clientPricePlusPlanExtra(){
    if(this.pricePlusPlanExtra != undefined){
      this.priceClientPlusPlanExtra = Math.ceil(this.pricePlusPlanExtra * 1.376263);
      this.extrasServiceService.priceClientPlusPlanExtraData(this.priceClientPlusPlanExtra);
      this.readOnlyPricePlusClientExtra = true;
    }

    if(this.priceClientPlusPlanExtra === 0){
      this.readOnlyPricePlusClientExtra = false;
    }
  }

  clientPricePremiumPlanExtra(){
    if(this.pricePremiumPlanExtra != undefined){
      this.priceClientPremiumPlanExtra = Math.ceil(this.pricePremiumPlanExtra * 1.376263);
      this.extrasServiceService.priceClientPremiumPlanExtraData(this.priceClientPremiumPlanExtra);
      this.readOnlyPricePremiumClientExtra = true;
    }

    if(this.priceClientPremiumPlanExtra === 0){
      this.readOnlyPricePremiumClientExtra = false;
    }
  }

  /* calculate price */
  priceExtraInitialPlan(){
    if(this.priceClientInitialPlanExtra != undefined){
      this.priceInitialPlanExtra = Math.ceil(this.priceClientInitialPlanExtra / 1.376263);
      this.extrasServiceService.priceInitialPlanExtraData(this.priceInitialPlanExtra);
      this.readOnlyPriceExtra = true;
    }

    if(this.priceInitialPlanExtra === 0){
      this.readOnlyPriceExtra = false;
    }
  }

  priceExtraPlusPlan(){
    if(this.priceClientPlusPlanExtra != undefined){
      this.pricePlusPlanExtra = Math.ceil(this.priceClientPlusPlanExtra / 1.376263);
      this.extrasServiceService.pricePlusPlanExtraData(this.pricePlusPlanExtra);
      this.readOnlyPricePlusExtra = true;
    }

    if(this.pricePlusPlanExtra === 0){
      this.readOnlyPricePlusExtra = false;
    }
  }

  priceExtraPremiumPlan(){
    if(this.priceClientPremiumPlanExtra != undefined){
      this.pricePremiumPlanExtra = Math.ceil(this.priceClientPremiumPlanExtra / 1.376263);
      this.extrasServiceService.pricePremiumPlanExtraData(this.pricePremiumPlanExtra);
      this.readOnlyPricePremiumExtra = true;
    }

    if(this.pricePremiumPlanExtra === 0){
      this.readOnlyPricePremiumExtra = false;
    }
  }

  /* calculate the customer price after adding extra */
  clientPriceExtra(extraService:extraService){
    if(extraService.priceExtra != undefined){
      extraService.priceClientExtra = Math.ceil(extraService.priceExtra * 1.376263);
      this.readOnlyPriceClientExtra = true;
    }

    if(extraService.priceClientExtra === 0){
      this.readOnlyPriceClientExtra = false;
    }
  }

  clientPriceExtraPlus(extraService:extraService){
    if(extraService.priceExtraPlus != undefined){
      extraService.priceClientExtraPlus = Math.ceil(extraService.priceExtraPlus * 1.376263);
      this.readOnlyPricePlusClientExtra = true;
    }

    if(extraService.priceClientExtraPlus === 0){
      this.readOnlyPricePlusClientExtra = false;
    }
  }

  clientPriceExtraPremium(extraService:extraService){
    if(extraService.priceExtraPremium != undefined){
      extraService.priceClientExtraPremium = Math.ceil(extraService.priceExtraPremium * 1.376263);
      this.readOnlyPricePremiumClientExtra = true;
    }

    if(extraService.priceClientExtraPremium === 0){
      this.readOnlyPricePremiumClientExtra = false;
    }
  }

  /* calculate price after adding extra */
  priceExtra(extraService:extraService){
    if(extraService.priceClientExtra != undefined){
      extraService.priceExtra = Math.ceil(extraService.priceClientExtra / 1.376263);
      this.readOnlyPriceExtra = true;
    }

    if(extraService.priceExtra === 0){
      this.readOnlyPriceExtra = false;
    }
  }

  priceExtraPlus(extraService:extraService){
    if(extraService.priceClientExtraPlus != undefined){
      extraService.priceExtraPlus = Math.ceil(extraService.priceClientExtraPlus / 1.376263);
      this.readOnlyPricePlusExtra = true;
    }

    if(extraService.priceExtraPlus === 0){
      this.readOnlyPricePlusExtra = false;
    }
  }

  priceExtraPremium(extraService:extraService){
    if(extraService.priceClientExtraPremium != undefined){
      extraService.priceExtraPremium = Math.ceil(extraService.priceClientExtraPremium / 1.376263);
      this.readOnlyPricePremiumExtra = true;
    }

    if(extraService.priceExtraPremium === 0){
      this.readOnlyPricePremiumExtra = false;
    }
  }


  /* *** add info *** */
  addInfoExtraService:any;

  addExtraService(){
    this.addInfoExtraService = this.extrasServiceService.addExtraService();
  }

  /* *** get info if canceled *** */

  /*  get info */
  getInfo: any;
  getExtrasInfo(extraService:extraService){
    this.getInfo = this.extrasServiceService.getInfoEdit(extraService);
  }

  extraCanceled: any;
  ifExtraCanceled(extraService:extraService){
    this.extraCanceled = this.extrasServiceService.ifCanceled(extraService);
    /* lock fields */
    this.editExtras = false;
  }

  /* *** update info *** */

  editExtrasInfo(){
    /* enable fields */
    this.editExtras = true;
  }
  
  updateExtra: any;
  updateInfo(extraServiceUpdate:extraService){
    this.updateExtra = this.extrasServiceService.editExtraService(extraServiceUpdate);

    /* lock fields */
    this.editExtras = false;
  }

  /* save extra information */
  addExtra(){
    this.extrasServiceService.extraService.push(new extraService(this.nameExtra, this.initialPlanExtra, 
      this.deliveryTimeInitialPlanExtra, this.priceInitialPlanExtra, this.priceClientInitialPlanExtra,
      this.plusPlanExtra, this.deliveryTimePlusPlanExtra, this.pricePlusPlanExtra, 
      this.priceClientPlusPlanExtra, this.premiumPlanExtra, this.deliveryTimePremiumPlanExtra, 
      this.pricePremiumPlanExtra, this.priceClientPremiumPlanExtra));
  }

  /* *** clear information *** */

  clearInfoExtra: any;
  clearInfo(){
    this.nameExtra = '';

    /* initial plans */
    this.initialPlanExtra = false;
    this.deliveryTimeInitialPlanExtra = 0;
    this.priceInitialPlanExtra = 0;
    this.priceClientInitialPlanExtra = 0;
 
    /* plus plan */
    this.plusPlanExtra = false;
    this.deliveryTimePlusPlanExtra = 0;
    this.pricePlusPlanExtra = 0;
    this.priceClientPlusPlanExtra = 0;
  
    /* premium plan */
    this.premiumPlanExtra = false;
    this.deliveryTimePremiumPlanExtra = 0;
    this.pricePremiumPlanExtra = 0;
    this.priceClientPremiumPlanExtra = 0; 

    /* clear info on service */
    this.clearInfoExtra = this.extrasServiceService.clearInfo();
  }

  clearInfoExtraInitial: any;
  clearInfoInitial() {
    if(this.initialPlanExtra === false){
      /* initial plans */
      this.initialPlanExtra = false;
      this.deliveryTimeInitialPlanExtra = 0;
      this.priceInitialPlanExtra = 0;
      this.priceClientInitialPlanExtra = 0;

      /* clear info on service */
      this.clearInfoExtraInitial = this.extrasServiceService.clearInfoInitial;
    }
  }

  clearInfoExtraPlus:any;
  clearInfoPlus(){
    if(this.plusPlanExtra === false){
      /* plus plan */
      this.plusPlanExtra = false;
      this.deliveryTimePlusPlanExtra = 0;
      this.pricePlusPlanExtra = 0;
      this.priceClientPlusPlanExtra = 0;

      /* clear info on service */
      this.clearInfoExtraPlus = this.extrasServiceService.clearInfoPlus;
    }
  }

  clearInfoExtraPremium:any;
  clearInfoPremium() {
    if(this.premiumPlanExtra === false){
      /* premium plan */
      this.premiumPlanExtra = false;
      this.deliveryTimePremiumPlanExtra = 0;
      this.pricePremiumPlanExtra = 0;
      this.priceClientPremiumPlanExtra = 0;

      /* clear info on service */
      this.clearInfoExtraPremium = this.extrasServiceService.clearInfoPremium;
    }
  }

  /* *** clear information after add *** */
  clearExtra(extraService:extraService) {
    if(extraService.initialPlanExtra === false){
      /* initial plans */
      extraService.initialPlanExtra = false;
      extraService.deliveryTimeExtra = 0;
      extraService.priceExtra = 0;
      extraService.priceClientExtra = 0;
    }
  }

  clearExtraPlus(extraService:extraService){
    if(extraService.plusPlanExtra === false){
      /* plus plan */
      extraService.plusPlanExtra = false;
      extraService.deliveryTimeExtraPlus = 0;
      extraService.priceExtraPlus = 0;
      extraService.priceClientExtraPlus = 0;
    }
  }

  clearExtraPremium(extraService:extraService) {
    if(extraService.premiumPlanExtra === false){
      /* premium plan */
      extraService.premiumPlanExtra = false;
      extraService.deliveryTimeExtraPremium = 0;
      extraService.priceExtraPremium = 0;
      extraService.priceClientExtraPremium = 0;
    }
  }

  /* delete extra information */
  deleteExtra(extraService:extraService){
    this.extrasServiceService.delete(extraService);
  }
  
}
