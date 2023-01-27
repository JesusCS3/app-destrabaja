import { Injectable } from '@angular/core';
import { requirementsService } from '../models/requirements-service.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementsServiceService {
  
  requirementsService:requirementsService[]=[];

  /* delete */
  delete(requirementsService:requirementsService){
    const index: number = this.requirementsService.indexOf(requirementsService);
    this.requirementsService.splice(index, 1);
  }

  /* *** delete information *** */
  deleteData(){
    const aLength: number = this.requirementsService.length;
    this.requirementsService.splice(0, aLength);
  }

}
