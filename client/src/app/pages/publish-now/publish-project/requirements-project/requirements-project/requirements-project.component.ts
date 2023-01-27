import { Component, OnInit } from '@angular/core';
import { requirementsProject } from '../models/requirements-project.model';
import { RequirementsProjectService } from '../services/requirements-project.service';

@Component({
  selector: 'app-requirements-project',
  templateUrl: './requirements-project.component.html',
  styleUrls: ['./requirements-project.component.css']
})
export class RequirementsProjectComponent implements OnInit {

  /***** variables for receive information *****/
  requirementsProject:requirementsProject[] = [];

  /* variables for requirements */
  requirementInput:string;

  constructor(
    private requirementsProjectService:RequirementsProjectService
  ) { }

  ngOnInit(): void {

    this.requirementsProject = this.requirementsProjectService.requirementsProject;
  }

  /* delete requirements information */
  deleteRequirement(requirementsProject:requirementsProject){
    this.requirementsProjectService.delete(requirementsProject);
  }

  /* save requirements information */
  addRequirement(){
    this.requirementsProjectService.requirementsProject.push(new requirementsProject(this.requirementInput));
  }

  /* clear */
  clear() {
    this.requirementInput = '';
  }
}
