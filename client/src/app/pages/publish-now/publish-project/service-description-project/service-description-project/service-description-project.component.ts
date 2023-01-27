import { Component, OnInit} from '@angular/core';
import { ServiceDescriptionProjectService } from '../services/service-description-project.service';

@Component({
  selector: 'app-service-description-project',
  templateUrl: './service-description-project.component.html',
  styleUrls: ['./service-description-project.component.css']
})
export class ServiceDescriptionProjectComponent implements OnInit {

  /* variables for counting characters */
  counterShortDescription = 0;
  counterLongDescription = 0;

  /* variables for service description */
  shortDescription: string;
  longDescription: string;

  constructor(
    private serviceDescriptionProjectService: ServiceDescriptionProjectService
  ) { }

  ngOnInit(): void {
    /* fill with previously saved values */
    this.receiveInfo();
    /* project description */
    this.serviceDescriptionProjectService.shortDescriptionObservable.subscribe(response => {
      this.shortDescription = response;
    });

    this.serviceDescriptionProjectService.longDescriptionObservable.subscribe(response => {
      this.longDescription = response;
    });
  }

  /* functions for counting characters */
  shortDescriptionCount(event: any) {
    this.counterShortDescription = event.target.value.length;
  }

  longDescriptionCount(event: any) {
    this.counterLongDescription = event.target.value.length;
  }

  /* fill with previously saved values */
  receiveInfo(){
    this.shortDescription = this.serviceDescriptionProjectService.shortDescription;
    this.longDescription = this.serviceDescriptionProjectService.longDescription;
  }

  /* send info */
  sendShortDescription(shortDescription:any){
    this.serviceDescriptionProjectService.shortDescriptionData(shortDescription.target.value);
  }

  sendLongDescription(longDescription:any){
    this.serviceDescriptionProjectService.longDescriptionData(longDescription.target.value);
  }
  
}
