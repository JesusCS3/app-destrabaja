import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  public url: string;

  constructor() { 
    this.url = GLOBAL.url;
  }

  fileRequest(url:string, params: Array<string>, files: Array<File> | null, token:string, name: string){
    return new Promise(function(resolve, reject) {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      if (files != null){
        for(let i = 0; i < files.length; i++){
          formData.append(name, files[i], files[i].name);
        }
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    });
  }
}
