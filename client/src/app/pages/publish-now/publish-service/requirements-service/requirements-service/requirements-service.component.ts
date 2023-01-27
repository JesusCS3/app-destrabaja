import { Component, OnInit } from '@angular/core';
import { requirementsService } from '../models/requirements-service.model';
import { RequirementsServiceService } from '../services/requirements-service.service';

@Component({
  selector: 'app-requirements-service',
  templateUrl: './requirements-service.component.html',
  styleUrls: ['./requirements-service.component.css']
})
export class RequirementsServiceComponent implements OnInit {

  /***** variables for receive information *****/
  requirementsService:requirementsService[] = [];

  /* variables for requirements */
  requirementInput:string;

  constructor(private requirementsServiceService:RequirementsServiceService) { }

  ngOnInit(): void {

    this.requirementsService = this.requirementsServiceService.requirementsService;
  }

  /* delete requirements information */
  deleteRequirement(requirementsService:requirementsService){
    this.requirementsServiceService.delete(requirementsService);
  }

  /* save requirements information */
  addRequirement(){
    this.requirementsServiceService.requirementsService.push(new requirementsService(this.requirementInput));
  }

  /* clear input */
  clear() {
    this.requirementInput = '';
  }

}
