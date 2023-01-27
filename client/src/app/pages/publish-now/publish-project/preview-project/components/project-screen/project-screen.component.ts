import { Component, OnInit } from '@angular/core';
import { FeaturesProjectService } from '../../../features-project/services/features-project.service';
import { GeneralInfoProjectService } from '../../../general-info-project/services/general-info-project.service';
import { requirementsProject } from '../../../requirements-project/models/requirements-project.model';
import { RequirementsProjectService } from '../../../requirements-project/services/requirements-project.service';
import { ServiceDescriptionProjectService } from '../../../service-description-project/services/service-description-project.service';

@Component({
  selector: 'app-project-screen',
  templateUrl: './project-screen.component.html',
  styleUrls: ['./project-screen.component.css']
})
export class ProjectScreenComponent implements OnInit {

  /* *** project information to display on the project screen *** */

  /* *** general info service *** */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  previewVideo: string;
  nameProject: string;
  /* *** description service *** */
  shortDescription: string;
  longDescription: string;
  /* *** features project *** */
  budget: number;
  deliveryDate: string;
  /* *** requierements *** */
  requirementsProject:requirementsProject[] = [];

  constructor(
    private generalInfoProjectService:GeneralInfoProjectService,
    private serviceDescriptionProjectService:ServiceDescriptionProjectService,
    private featuresProjectService:FeaturesProjectService,
    private requirementsProjectService:RequirementsProjectService,
  ) {}

  ngOnInit(): void {
    this.receiveInfo();

    this.calculatePriceReceive();
  }

  /* *** receive info on services *** */
  receiveInfo(){
    /* *** general info *** */
    this.previewImg = this.generalInfoProjectService.previewImg;
    this.previewImgTwo = this.generalInfoProjectService.previewImgTwo;
    this.previewImgThree = this.generalInfoProjectService.previewImgThree;
    this.previewVideo = this.generalInfoProjectService.previewVideo;
    this.nameProject = this.generalInfoProjectService.nameProject;
    /* *** description service *** */
    this.shortDescription = this.serviceDescriptionProjectService.shortDescription;
    this.longDescription = this.serviceDescriptionProjectService.longDescription;
    /* *** features project *** */
    this.budget = this.featuresProjectService.budget;
    this.deliveryDate = this.featuresProjectService.deliveryDate;
    /* *** requirements project *** */
    this.requirementsProject = this.requirementsProjectService.requirementsProject;
  }

  /* *** calculate price to receive *** */
  priceReceive:number;
  calculatePriceReceive(){
    this.priceReceive = this.budget / 1.376263;
  }
}
