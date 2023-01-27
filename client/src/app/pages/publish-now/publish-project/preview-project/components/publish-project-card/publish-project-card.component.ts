import { Component, OnInit } from '@angular/core';
import { GeneralInfoProjectService } from '../../../general-info-project/services/general-info-project.service';
import { ServiceDescriptionProjectService } from '../../../service-description-project/services/service-description-project.service';

@Component({
  selector: 'app-publish-project-card',
  templateUrl: './publish-project-card.component.html',
  styleUrls: ['./publish-project-card.component.css']
})
export class PublishProjectCardComponent implements OnInit {

  /* project information to display on the project card */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  previewVideo: string;
  nameProject: string;
  shortDescription: string;

  constructor(
    private generalInfoService: GeneralInfoProjectService,
    private serviceDescriptionService: ServiceDescriptionProjectService,
  ) {}

  ngOnInit(): void {
    this.receiveChanges();
  }

  receiveChanges(){
    this.previewImg = this.generalInfoService.previewImg;
    this.previewImgTwo = this.generalInfoService.previewImgTwo;
    this.previewImgThree = this.generalInfoService.previewImgThree;
    this.previewVideo = this.generalInfoService.previewVideo;
    this.nameProject = this.generalInfoService.nameProject;
    this.shortDescription = this.serviceDescriptionService.shortDescription;
  }
}
