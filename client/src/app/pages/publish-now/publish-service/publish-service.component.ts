import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { DescriptionServiceService } from './description-service/services/description-service.service';
import { extraService } from './extras-service/models/extras-service.model';
import { ExtrasServiceService } from './extras-service/services/extras-service.service';
import { GeneralInfoServiceService } from './general-info-service/services/general-info-service.service';
import { deliverables } from './levels-service/models/deliverables/deliverables.model';
import { DeliverablesService } from './levels-service/services/deliverables/deliverables.service';
import { LevelsServiceService } from './levels-service/services/levels-service/levels-service.service';
import { requirementsService } from './requirements-service/models/requirements-service.model';
import { RequirementsServiceService } from './requirements-service/services/requirements-service.service';

import { service } from './models/service.model';
import { servicePlanOne } from './models/service-plan-one.model';
import { servicePlanTwo } from './models/service-plan-two.model';
import { servicePlanThree} from './models/service-plan-three.model';
import { deliverable } from './models/deliverable.model';
import { extras } from './models/extras.model';
import { requirements } from './models/requirements.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UploadsService } from 'src/app/services/uploads/uploads.service';
import { UserService } from 'src/app/services/user/user.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-publish-service',
  templateUrl: './publish-service.component.html',
  styleUrls: ['./publish-service.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.my-custom-class .tooltip-inner {
				background-color: #fff;
				font-size: 0.8rem;
        font-weight: bold;
        color: #425CC7;
        text-align: justify;
        padding: 10px;
        margin: 5px;
        max-width: 310px !important;
        box-shadow: rgba(0, 0, 0, 0.301) 0px 2px 4px 0px, rgba(0, 0, 0, 0.301) 0px 2px 16px 0px !important;
			}
			.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
				border-right-color: #fff;
			}
			.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
				border-left-color: #fff;
			}
			.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
				border-top-color: #fff;
			}
			.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
				border-bottom-color: #fff;
			}
		`,
	]
})

export class PublishServiceComponent implements OnInit {

  /* variables for request */
  public url:string;
  public identity:any;
  public token:any;
  public service: service;
  public servicePlanOne: servicePlanOne;
  public servicePlanTwo: servicePlanTwo;
  public servicePlanThree: servicePlanThree;
  public deliverable: deliverable;
  public extras: extras;
  public requirements: requirements;

  /* *** general info service *** */

  /* *** description service *** */

  /* *** levels service *** */
  /* deliverables */
  deliverables:deliverables[] = [];
  /* initial plan */  

  /* plus plan */

  /* premium plan */

  /* extras */
  extraService:extraService[] = [];
  /* requirements */
  requirementsService:requirementsService[] = [];

  constructor(
    private userService: UserService,
    private upLoadService: UploadsService,
    private modalService: NgbModal,
    config: NgbModalConfig,

    private generalInfoServiceService:GeneralInfoServiceService,
    private descriptionServiceService:DescriptionServiceService,
    private levelsServiceService:LevelsServiceService,
    private deliverableService:DeliverablesService, 
    private extraServiceService:ExtrasServiceService,
    private requirementsServiceService:RequirementsServiceService
  ) { 

    /* receive data */
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;

    // customize default values of modals
		config.backdrop = 'static';
    config.centered = true; 

    /* object service */
    this.service = {
      name: '', 
      hashtags:'', 
      category:'', 
      subcategory:'', 
      videoService:null,
      imgServiceOne: null,
      imgServiceTwo: null,
      imgServiceThree: null,
      shortDescription: '',
      longDescription: '',
      status: '',
      createdAt: '',
      user: this.identity._id
    }

    /* object service plan one */
    this.servicePlanOne = {
      namePlanOne: '',
      deliveryTimePlanOne: 0,
      commentPlanOne: '',
      pricePlanOne: 0,
      clientPricePlanOne: 0,
      service: ''
    }

    /* object service plan two */
    this.servicePlanTwo = {
      namePlanTwo: '',
      deliveryTimePlanTwo: 0,
      commentPlanTwo: '',
      pricePlanTwo: 0,
      clientPricePlanTwo: 0,
      service: ''
    }

    /* object service plan three */
    this.servicePlanThree = {
      namePlanThree: '',
      deliveryTimePlanThree: 0,
      commentPlanThree: '',
      pricePlanThree: 0,
      clientPricePlanThree: 0,
      service: ''
    }
  }

  ngOnInit(): void {
    this.scrollTop();
    this.deliverables = this.deliverableService.deliverables;
    this.extraService = this.extraServiceService.extraService;
    this.requirementsService = this.requirementsServiceService.requirementsService;
  }

  ngOnDestroy(): void {
    this.clearData();
  }

  /* *** scroll to top *** */
  @HostListener('window:scroll')
  checkScroll() {
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  
  /* variable for service preview */
  preview: boolean = false;

  /* service preview */
  servicePreview() {
    this.preview = true;
  }

  /* edit service */
  editService() {
    this.preview = false;
  }

  /* variable to confirm publish a service */
  confirm: boolean = false;

  /* confirm service */
  confirmService() {
    this.confirm = true;
  }

  clearGeneralInfo:any;
  clearDescriptionService: any;
  clearInitialPlan: any;
  clearPlusPlan: any;
  clearPremiumPlan: any;
  clearDeliverables:any;
  clearExtras: any;
  clearRequirements: any;

  clearData(){
    /* *** general info *** */
    this.clearGeneralInfo = this.generalInfoServiceService.clearInfo();
    /* *** description service *** */
    this.clearDescriptionService = this.descriptionServiceService.clearInfo();
    /* *** levels service *** */
    this.clearInitialPlan = this.levelsServiceService.clearInfoInitialPlan();
    this.clearPlusPlan = this.levelsServiceService.clearInfoPlusPlan(); 
    this.clearPremiumPlan = this.levelsServiceService.clearInfoPremiumPlan();   
    /* *** deliverables *** */
    this.clearDeliverables = this.deliverableService.deleteData();
    /* *** extras *** */
    this.clearExtras = this.extraServiceService.deleteData();
    /* *** requirements *** */
    this.clearRequirements = this.requirementsServiceService.deleteData();
  }

  /* *** receive info on services *** */
  receiveInfo(){
    /* *** general info *** */
    //this.previewImg = this.generalInfoServiceService.previewImg;
    //this.previewImgTwo = this.generalInfoServiceService.previewImgTwo;
    //this.previewImgThree = this.generalInfoServiceService.previewImgThree;
    //this.previewVideo = this.generalInfoServiceService.previewVideo;

    this.service.name = this.generalInfoServiceService.nameService;
    this.service.hashtags = this.generalInfoServiceService.hashtags;
    this.service.category = this.generalInfoServiceService.category;
    this.service.subcategory = this.generalInfoServiceService.subcategory;
    this.service.videoService = this.generalInfoServiceService.videoFile;
    this.service.imgServiceOne = this.generalInfoServiceService.imageFile;
    /* *** description service *** */
    this.service.shortDescription = this.descriptionServiceService.shortDescription;
    this.service.longDescription = this.descriptionServiceService.longDescription;
    /* *** levels service *** */
    /* plan one */  
    this.servicePlanOne.namePlanOne = this.levelsServiceService.initialPlanName;
    this.servicePlanOne.deliveryTimePlanOne = this.levelsServiceService.deliveryTimeInitialPlan;
    this.servicePlanOne.commentPlanOne = this.levelsServiceService.commentInitialPlan;
    this.servicePlanOne.pricePlanOne = this.levelsServiceService.priceInitialPlan;
    this.servicePlanOne.clientPricePlanOne = this.levelsServiceService.priceClientInitialPlan;
    /* plan two */
    this.servicePlanTwo.namePlanTwo = this.levelsServiceService.plusPlanName;
    this.servicePlanTwo.deliveryTimePlanTwo = this.levelsServiceService.deliveryTimePlusPlan;
    this.servicePlanTwo.commentPlanTwo = this.levelsServiceService.commentPlusPlan;
    this.servicePlanTwo.pricePlanTwo = this.levelsServiceService.pricePlusPlan;
    this.servicePlanTwo.clientPricePlanTwo = this.levelsServiceService.priceClientPlusPlan;
    /* plan three */
    this.servicePlanThree.namePlanThree = this.levelsServiceService.premiumPlanName;
    this.servicePlanThree.deliveryTimePlanThree = this.levelsServiceService.deliveryTimePremiumPlan;
    this.servicePlanThree.commentPlanThree = this.levelsServiceService.commentPremiumPlan;
    this.servicePlanThree.pricePlanThree = this.levelsServiceService.pricePremiumPlan;
    this.servicePlanThree.clientPricePlanThree = this.levelsServiceService.priceClientPremiumPlan;
    /* *** deliverables *** */
    this.deliverables = this.deliverableService.deliverables;
    /* *** extras *** */
    this.extraService = this.extraServiceService.extraService;
    /* *** requirements *** */
    this.requirementsService = this.requirementsServiceService.requirementsService;

    /* receive data from services */
    console.log(this.service);
    console.log(this.servicePlanOne);
    console.log(this.servicePlanTwo);
    console.log(this.servicePlanThree);
    console.log(this.deliverables);
    console.log(this.extraService);
    console.log(this.requirementsService);

  }

}
