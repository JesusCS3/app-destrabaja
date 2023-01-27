import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralInfoServiceService } from '../services/general-info-service.service';


@Component({
  selector: 'app-general-info-service',
  templateUrl: './general-info-service.component.html',
  styleUrls: ['./general-info-service.component.css']
})
export class GeneralInfoServiceComponent implements OnInit {
  
  /* variables for general info */
  nameService: string;
  hashtags: string;
  category: string;
  subcategory: string;
  videoFile: any;
  imageFile: any;

  /* variable for category */
  categoryList = [
    {
      id: 'bie',
      name: 'Bienestar'
    },
    {
      id: 'cla',
      name: 'Clases'
    },
    {
      id: 'dis',
      name: 'Diseño'
    },
    {
      id: 'mus',
      name: 'Música'
    },
    {
      id: 'web',
      name: 'Web'
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
    private sanitizer: DomSanitizer,
    private generalInfoServiceService: GeneralInfoServiceService
  ) { }

  ngOnInit(): void {
    /* fill with previously saved values */
    this.receiveInfo();

    /* general info */
    this.generalInfoServiceService.nameServiceObservable.subscribe(response => {
      this.nameService = response;
    });

    this.generalInfoServiceService.hashtagsObservable.subscribe(response => {
      this.hashtags = response;
    });

    this.generalInfoServiceService.categoryObservable.subscribe(response => {
      this.category = response;
    });

    this.generalInfoServiceService.subcategoryObservable.subscribe(response => {
      this.subcategory = response;
    });

    this.generalInfoServiceService.videoFileObservable.subscribe(response => {
      this.videoFile = response;
    });

    this.generalInfoServiceService.imageFileObservable.subscribe(response => {
      this.imageFile = response;
    });

  }

  /* capture file general info */
  captureFileImg(event: any) {
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then((img: any) => {
      this.previewImg = img.base;
      this.generalInfoServiceService.previewImgData(this.previewImg);
    })

    const capturedFileTwo = event.target.files[1];
    this.extractBase64(capturedFileTwo).then((img: any) => {
      this.previewImgTwo = img.base;
      this.generalInfoServiceService.previewImgTwoData(this.previewImgTwo);
    })

    const capturedFileThree = event.target.files[2];
    this.extractBase64(capturedFileThree).then((img: any) => {
      this.previewImgThree = img.base;
      this.generalInfoServiceService.previewImgThreeData(this.previewImgThree);
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
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.generalInfoServiceService.previewVideoData(this.url);
      }
    }
  }

  clearPreviewImg: any;
  clearPreviewVideo: any;
  /* delete preview video */
  deletePreviewVideo() {
    this.url = '';
    this.videoFile = '';
    this.clearPreviewVideo = this.generalInfoServiceService.clearPreviewVideo();
  }

  /* delete preview images */
  deletePreviewImages() {
    this.previewImg = '';
    this.previewImgTwo = '';
    this.previewImgThree = '';
    this.imageFile = '';
    this.clearPreviewImg = this.generalInfoServiceService.clearPreviewImg();
  }

  /* fill with previously saved values */
  receiveInfo(){
    this.nameService = this.generalInfoServiceService.nameService;
    this.hashtags = this.generalInfoServiceService.hashtags;
    this.category = this.generalInfoServiceService.category;
    this.subcategory = this.generalInfoServiceService.subcategory;
    this.videoFile = this.generalInfoServiceService.videoFile;
    this.imageFile = this.generalInfoServiceService.imageFile;

    /* preview */
    this.previewImg = this.generalInfoServiceService.previewImg;
    this.previewImgTwo = this.generalInfoServiceService.previewImgTwo;
    this.previewImgThree = this.generalInfoServiceService.previewImgThree;
    this.url = this.generalInfoServiceService.previewVideo;
  }

  /* send new info */
  sendNameService(nameService: any) {
    this.generalInfoServiceService.nameServiceData(nameService.target.value);
  }

  sendHashtags(hashtags: any) {
    this.generalInfoServiceService.hashtagsData(hashtags.target.value);
  }

  sendCategory(category: any) {
    this.generalInfoServiceService.categoryData(category.target.value);
  }

  sendSubcategory(subcategory: any) {
    this.generalInfoServiceService.subcategoryData(subcategory.target.value);
  }

  sendVideoFile(videoFile: any) {
    this.generalInfoServiceService.videoFileData(videoFile.target.value);
  }

  sendImageFile(imageFile: any) {
    this.generalInfoServiceService.imageFileData(imageFile.target.value);
  }

}
