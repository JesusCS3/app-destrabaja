import { Component, OnInit } from '@angular/core';
import { FeaturesProjectService } from '../services/features-project.service';

@Component({
  selector: 'app-features-project',
  templateUrl: './features-project.component.html',
  styleUrls: ['./features-project.component.css']
})
export class FeaturesProjectComponent implements OnInit {

  /* *** variables for features *** */
  budget: number;
  deliveryDate: string;

  constructor(
    private featuresProjectService:FeaturesProjectService
  ) { }

  ngOnInit(): void {
    /* fill with previously saved values */
    this.receiveInfo();
    /* features project */
    this.featuresProjectService.budgetObservable.subscribe(response => {
      this.budget = response;
    });

    this.featuresProjectService.deliveryDateObservable.subscribe(response => {
      this.deliveryDate = response;
    });
  }

  /* fill with previously saved values */
  receiveInfo(){
    this.budget = this.featuresProjectService.budget;
    this.deliveryDate = this.featuresProjectService.deliveryDate;
  }

  /* send info */
  sendBudget(budget:any){
    this.featuresProjectService.budgetData(budget.target.value);
  }

  sendDeliveryDate(deliveryDate:any){
    this.featuresProjectService.deliveryDateData(deliveryDate.target.value);
  }

  /* date lock */ 
  lock:boolean = false;
  /* locking data */
  lockData: string;
  /* date lock */
  dateLock(event: any){
    this.lockData = event.target.value;

    if(this.lockData === 'Si'){
      this.lock = true;
    }

    if(this.lockData === 'No'){
      this.lock = false;
    }
  }

}
