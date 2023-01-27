import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { generalInfoService } from '../models/general-info-service.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoServiceService {
  generalInfoService: generalInfoService[] = [];

  /* *** send information from general info project *** */
  nameService: string;
  private nameServiceSubject = new Subject<string>();
  nameServiceObservable = this.nameServiceSubject.asObservable();

  nameServiceData(nameService: string){
    this.nameService = nameService;
    this.nameServiceSubject.next(nameService);
  }
  
  hashtags: string;
  private hashtagsSubject = new Subject<string>();
  hashtagsObservable = this.hashtagsSubject.asObservable();

  hashtagsData(hashtags: string){
    this.hashtags = hashtags;
    this.hashtagsSubject.next(hashtags);
  }

  category: string;
  private categorySubject = new Subject<string>();
  categoryObservable = this.categorySubject.asObservable();

  categoryData(category: string){
    this.category = category;
    this.categorySubject.next(category);
  }

  subcategory: string;
  private subcategorySubject = new Subject<string>();
  subcategoryObservable = this.subcategorySubject.asObservable();

  subcategoryData(subcategory: string){
    this.subcategory = subcategory;
    this.subcategorySubject.next(subcategory);
  }

  videoFile: any;
  private videoFileSubject = new Subject<string>();
  videoFileObservable = this.videoFileSubject.asObservable();

  videoFileData(videoFile: string){
    this.videoFile = videoFile;
    this.videoFileSubject.next(videoFile);
  }

  imageFile: any;
  private imageFileSubject = new Subject<string>();
  imageFileObservable = this.imageFileSubject.asObservable();

  imageFileData(imageFile: string){
    this.imageFile = imageFile;
    this.imageFileSubject.next(imageFile);
  }

  /* *** save images and video preview *** */
  previewImg: string;
  previewImgData(previewImg: string){
    this.previewImg = previewImg;
  }

  previewImgTwo: string;
  previewImgTwoData(previewImgTwo: string){
    this.previewImgTwo = previewImgTwo;
  }

  previewImgThree: string;
  previewImgThreeData(previewImgThree: string){
    this.previewImgThree = previewImgThree;
  }

  previewVideo: any;
  previewVideoData(previewVideo: any){
    this.previewVideo = previewVideo;
  }

  /* *** save information *** */
  save(){
    let generalInfo = new generalInfoService(this.nameService, this.hashtags, this.category, this.subcategory,
      this.videoFile, this.imageFile);
    this.generalInfoService.push(generalInfo);
  }

  /* *** delete information *** */
  delete(){
    const aLength: number = this.generalInfoService.length;
    this.generalInfoService.splice(0, aLength);
  }

  /* *** clear information *** */
  clearInfo(){
    this.nameService = '';
    this.hashtags = '';
    this.category = '';
    this.subcategory = '';
    this.videoFile = '';
    this.imageFile = '';
    this.previewImg = '';
    this.previewImgTwo = '';
    this.previewImgThree = '';
    this.previewVideo = '';
  }

  clearPreviewImg(){
    this.previewImg = '';
    this.previewImgTwo = '';
    this.previewImgThree = '';
    this.imageFile = '';
  }

  clearPreviewVideo(){
    this.previewVideo = '';
    this.videoFile = '';
  }

}
