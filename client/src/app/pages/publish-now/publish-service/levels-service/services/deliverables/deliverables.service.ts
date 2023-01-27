import { Injectable } from '@angular/core';
import { deliverables } from '../../models/deliverables/deliverables.model';

@Injectable({
  providedIn: 'root'
})
export class DeliverablesService {

  deliverables:deliverables [] = [];

  /* delete */
  delete(deliverable:deliverables){
    const index: number = this.deliverables.indexOf(deliverable);
    this.deliverables.splice(index, 1);
  }

  /* *** delete information *** */
  deleteData(){
    const aLength: number = this.deliverables.length;
    this.deliverables.splice(0, aLength);
  }

}
