import { Component, OnInit } from '@angular/core';
import { DescriptionServiceService } from '../services/description-service.service';

@Component({
  selector: 'app-description-service',
  templateUrl: './description-service.component.html',
  styleUrls: ['./description-service.component.css']
})
export class DescriptionServiceComponent implements OnInit {

  /* variables for counting characters */
  counterShortDescription = 0;
  counterLongDescription = 0;

  /* information to be displayed when editing the project description */
  shortDescription: string;
  longDescription: string;

  constructor(private descriptionServiceService: DescriptionServiceService) { }

  ngOnInit(): void {
    /* fill with previously saved values */
    this.receiveInfo();

    /* description service */
    this.descriptionServiceService.shortDescriptionObservable.subscribe(response => {
      this.shortDescription = response;
    });

    this.descriptionServiceService.longDescriptionObservable.subscribe(response => {
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
    this.shortDescription = this.descriptionServiceService.shortDescription;
    this.longDescription = this.descriptionServiceService.longDescription;
  }

   /* send info */
   sendShortDescription(shortDescription:any){
    this.descriptionServiceService.shortDescriptionData(shortDescription.target.value);
  }

  sendLongDescription(longDescription:any){
    this.descriptionServiceService.longDescriptionData(longDescription.target.value);
  }

}
