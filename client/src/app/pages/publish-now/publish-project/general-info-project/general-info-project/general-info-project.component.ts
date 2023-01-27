import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralInfoProjectService } from '../services/general-info-project.service';

@Component({
  selector: 'app-general-info-project',
  templateUrl: './general-info-project.component.html',
  styleUrls: ['./general-info-project.component.css']
})
export class GeneralInfoProjectComponent implements OnInit {
  
  /* variables for general info */
  nameProject: string;
  hashtags: string;
  category: string;
  subcategory: string;
  videoFile: any;
  imageFile: any;
  filesProject: any;
  
  /* variable for category */
  categoryList = [
    {
      id:'bie',
      name:'Bienestar'
    },
    {
      id:'cla',
      name:'Clases'
    },
    {
      id:'dis',
      name:'Diseño'
    },
    {
      id:'mus',
      name:'Música'
    },
    {
      id:'web',
      name:'Web'
    }
  ];
  
  /* variables for file capture */
  previewImg: string;
  previewImgTwo: string;
  previewImgThree: string;
  files: any = [];
  
  url!: string | ArrayBuffer | null;
  format: string;

  constructor(
    private sanitizer:DomSanitizer,
    private generalInfoProjectService: GeneralInfoProjectService
  ) { }

  ngOnInit(): void {
    /* fill with previously saved values */
    this.receiveInfo();

    /* general info */
    this.generalInfoProjectService.nameProjectObservable.subscribe(response => {
      this.nameProject = response;
    });

    this.generalInfoProjectService.hashtagsObservable.subscribe(response => {
      this.hashtags = response;
    });

    this.generalInfoProjectService.categoryObservable.subscribe(response => {
      this.category = response;
    });

    this.generalInfoProjectService.subcategoryObservable.subscribe(response => {
      this.subcategory = response;
    });

    this.generalInfoProjectService.videoFileObservable.subscribe(response => {
      this.videoFile = response;
    });

    this.generalInfoProjectService.imageFileObservable.subscribe(response => {
      this.imageFile = response;
    });

    this.generalInfoProjectService.filesProjectObservable.subscribe(response => {
      this.filesProject = response;
    });

  }

  receiveInfo(){
    this.nameProject = this.generalInfoProjectService.nameProject;
    this.hashtags = this.generalInfoProjectService.hashtags;
    this.category = this.generalInfoProjectService.category;
    this.subcategory = this.generalInfoProjectService.subcategory;
    this.videoFile = this.generalInfoProjectService.videoFile;
    this.imageFile = this.generalInfoProjectService.imageFile;
    this.filesProject = this.generalInfoProjectService.filesProject;

    /* preview */
    this.previewImg = this.generalInfoProjectService.previewImg;
    this.previewImgTwo = this.generalInfoProjectService.previewImgTwo;
    this.previewImgThree = this.generalInfoProjectService.previewImgThree;
    this.url = this.generalInfoProjectService.previewVideo;
  }
  
  /* capture file general info */
  captureFileImg(event: any){
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then((img: any) => {
      this.previewImg = img.base;
      this.generalInfoProjectService.previewImgData(this.previewImg);
    })

    const capturedFileTwo = event.target.files[1];
    this.extractBase64(capturedFileTwo).then((img: any) => {
      this.previewImgTwo = img.base;
      this.generalInfoProjectService.previewImgTwoData(this.previewImgTwo);
    })

    const capturedFileThree = event.target.files[2];
    this.extractBase64(capturedFileThree).then((img: any) => {
      this.previewImgThree = img.base;
      this.generalInfoProjectService.previewImgThreeData(this.previewImgThree);
    })

    this.files.push(capturedFile);
    this.files.push(capturedFileTwo);
    this.files.push(capturedFileThree);
  }

  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
  })

  /* prueba para visualizar imagen y video */
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.generalInfoProjectService.previewVideoData(this.url);
      }
    }
  }

  clearPreviewImg: any;
  clearPreviewVideo: any;
  clearFiles: any;
  /* delete preview video */
  deletePreviewVideo(){
    this.url = '';
    this.videoFile = '';
    this.clearPreviewVideo = this.generalInfoProjectService.clearPreviewVideo();
  }

  /* delete preview images */
  deletePreviewImages(){
    this.previewImg = '';
    this.previewImgTwo = '';
    this.previewImgThree = '';
    this.imageFile = '';
    this.clearPreviewImg = this.generalInfoProjectService.clearPreviewImg();
  }

  /* delete files */
  deleteFilesProject(){
    this.filesProject = '';
    this.clearFiles = this.generalInfoProjectService.clearPreviewFiles();
  }


  /* send info */
  sendNameService(nameProject:any){
    this.generalInfoProjectService.nameProjectData(nameProject.target.value);
  }

  sendHashtags(hashtags:any){
    this.generalInfoProjectService.hashtagsData(hashtags.target.value);
  }

  sendCategory(category:any){
    this.generalInfoProjectService.categoryData(category.target.value);
  }

  sendSubcategory(subcategory:any){
    this.generalInfoProjectService.subcategoryData(subcategory.target.value);
  }

  sendVideoFile(videoFile:any){
    this.generalInfoProjectService.videoFileData(videoFile.target.value);
  }

  sendImageFile(imageFile:any){
    this.generalInfoProjectService.imageFileData(imageFile.target.value);
  }

  sendFilesProject(filesProject:any){
    this.generalInfoProjectService.filesProjectData(filesProject.target.value);
  }

}
