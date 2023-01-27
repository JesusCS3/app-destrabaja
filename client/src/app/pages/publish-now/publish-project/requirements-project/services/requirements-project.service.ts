import { Injectable } from '@angular/core';
import { requirementsProject } from '../models/requirements-project.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementsProjectService {

  requirementsProject:requirementsProject[]=[];

  /* delete */
  delete(requirementsProject:requirementsProject){
    const index: number = this.requirementsProject.indexOf(requirementsProject);
    this.requirementsProject.splice(index, 1);
  }

  /* *** delete information *** */
  deleteData(){
    const aLength: number = this.requirementsProject.length;
    this.requirementsProject.splice(0, aLength);
  }
}
