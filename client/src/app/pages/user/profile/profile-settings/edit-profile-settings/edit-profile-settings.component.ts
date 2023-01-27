import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { GLOBAL } from 'src/app/services/global';
import { UploadsService } from 'src/app/services/uploads/uploads.service';
import { UserService } from 'src/app/services/user/user.service';
import { profileSettings } from '../models/profile-settings.model';
import { ProfileSettingsService } from '../services/profile-settings.service';

@Component({
  selector: 'app-edit-profile-settings',
  templateUrl: './edit-profile-settings.component.html',
  styleUrls: ['./edit-profile-settings.component.css'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.my-custom-class .tooltip-inner {
				background-color: #fff;
				font-size: 0.8rem;
        font-weight: bold;
        color: #425CC7;
        text-align: justify;
        padding: 10px;
        margin: 5px;
        max-width: 310px !important;
        box-shadow: rgba(0, 0, 0, 0.301) 0px 2px 4px 0px, rgba(0, 0, 0, 0.301) 0px 2px 16px 0px !important;
			}
			.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
				border-right-color: #fff;
			}
			.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
				border-left-color: #fff;
			}
			.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
				border-top-color: #fff;
			}
			.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
				border-bottom-color: #fff;
			}
		`,
  ]
})
export class EditProfileSettingsComponent implements OnInit {

  /* variables for request */
  public url:string;
  public identity:any;
  public token:any;
  public profileSettings:profileSettings;

  /* variables for file capture */
  previewImg: any;
  files: any = [];
  urlFile!: any;
  format: string;

  /* variables for counting characters */
  counterResumeSummary = 0;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private profileSettingsService:ProfileSettingsService,
    private userService: UserService,
    private upLoadService: UploadsService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    
    /* receive data */
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.url = GLOBAL.url;
    this.profileSettings = this.getProfile();

    // customize default values of modals
		config.backdrop = 'static';
    config.centered = true; 
   }

  ngOnInit(): void {
  }

  /* capture file general info */
  captureFileImg(event: any) {
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile).then((img: any) => {
      this.previewImg = img.base;
    })

    this.files.push(capturedFile);
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
        this.urlFile = (<FileReader>event.target).result;
      }
    }
  }

  clearPreviewImgProfile: any;
  clearPreviewVideoProfile: any;
  clearCvFile: any;
  clearPreviousWork: any;
  /* delete preview video */
  deletePreviewVideo() {
    this.urlFile = null;
    this.profileSettings.profileVideo = null;
  }

  /* delete preview images */
  deletePreviewImages() {
    this.previewImg = null;
    this.profileSettings.profileImg = null;
  }

  /* delete cv file */
  deleteResumeSummaryFile(){
    this.profileSettings.resumeSummaryFile = null;
  }

  /* delete prevoious work */
  deletePreviousWork(){
    this.profileSettings.previousWork = null;
  }

  /* functions for counting characters */
  resumeSummaryCount(event: any) {
    this.counterResumeSummary = event.target.value.length;
  }

  /* add required attribute to rfc */
  publishEvent:string;
  requiredData:boolean = false;
  rfcData(event: any){
    this.publishEvent = event.target.value;

    if(this.publishEvent === 'publish'){
      this.requiredData = false;
    }

    if(this.publishEvent === 'nopublish'){
      this.requiredData= true;
    }
  }

  /* *** proceed to the second part *** */
  firstPart: boolean = false;
  registerFirstPart(): void {
    this.firstPart = true;
  }

  /* *** proceed to the third part *** */
  secondPart: boolean = false;
  registerSecondPart(): void {
    this.secondPart = true;
  }

  /* back to first part */
  backFirstPart(): void {
    this.firstPart = false;
  }

  /* *** proceed to the fourth part *** */
  thirdPart: boolean = false;
  registerThirdPart(): void {
    this.thirdPart = true;
  }

  /* back to second part */
  backSecondPart(): void {
    this.secondPart = false;
  }

  /* back to third part */
  backThirdPart(): void {
    this.thirdPart = false;
  }

  /* *** get profile *** */
  getProfile(){
    this.profileSettingsService.getProfile(this.token, this.identity._id).subscribe({      
      next: (response: any) => {
        if(response.profile){
          this.profileSettings = response.profile;
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    return this.profileSettings;
  }

  /* *** update profile *** */
  updateMsg:string;
  updateProfile(updateProfileMessage:any){
    this.profileSettingsService.updateProfile(this.token, this.profileSettings).subscribe({
      next: (response) => {
        if(response.profile){
          /* Update img */
          if (this.imageToUpload != null){
            /* update profile img */
            this.upLoadService.fileRequest(this.url + 'upload-img-profile/' + response.profile._id, [], this.imageToUpload, this.token, 'imgProfile')
            .then((response: any) => {
              if(response.profile){
                console.log('Imagen de perfil actualizada correctamente');
              }else{
                this.updateMsg = response.message;
                this.modalService.open(updateProfileMessage);
              }
            });
          }

          /* update video */
          if (this.videoToUpload != null){
            /* update profile video */
            this.upLoadService.fileRequest(this.url + 'upload-video-profile/' + response.profile._id, [], this.videoToUpload, this.token, 'videoProfile')
            .then((response: any) => {
              if(response.profile){
                console.log('Video de perfil actualizado correctamente');
              }else{
                this.updateMsg = response.message;
                this.modalService.open(updateProfileMessage);
              }
            });
          }else{
            console.log('No se ha seleccionado un video de perfil');
          }

          /* update resumesummary file */
          if (this.resumesummaryFileToUpload != null){
            /* update profile resumesummary file */
            this.upLoadService.fileRequest(this.url + 'upload-resumesummary-profile/' + response.profile._id, [], this.resumesummaryFileToUpload, this.token, 'resumesummaryFile')
            .then((response: any) => {
              if(response.profile){
                console.log('El CV de perfil se ha actualizado correctamente');
              }else{
                this.updateMsg = response.message;
                this.modalService.open(updateProfileMessage);
              }
            });
          }else{
            console.log('No se ha seleccionado un CV de perfil');
          }

          /* update previous work file */
          if (this.previousWorkToUpload != null){
            /* update profile previous work */
            this.upLoadService.fileRequest(this.url + 'upload-previous-work-profile/' + response.profile._id, [], this.previousWorkToUpload, this.token, 'previousWork')
            .then((response: any) => {
              if(response.profile){
                console.log('Trabajo previo actualizado correctamente');
              }else{
                this.updateMsg = response.message;
                this.modalService.open(updateProfileMessage);
              }
            });
          }else{
            console.log('No se ha seleccionado un trabajo previo');
          }

          this.updateMsg = '¡La información de tu perfil se actualizo correctamente!';
          this.modalService.open(updateProfileMessage);
          
          /* redirect to profile */
          this.router.navigate(['/profile']);
        }else{
          this.updateMsg = response.message;
          this.modalService.open(updateProfileMessage);
        }
      },
      error: (err) => {
        this.updateMsg = err.error.message;
        this.modalService.open(updateProfileMessage);
        console.log(err);
      }
    });
  }

  imageToUpload: Array<File> | null = null;
  imgChangeEvent(fileInput: any){
    this.imageToUpload = <Array<File>>fileInput.target.files;
  }

  videoToUpload:  Array<File> | null = null;
  videoChangeEvent(fileInput: any){
    this.videoToUpload = <Array<File>>fileInput.target.files;
  }

  resumesummaryFileToUpload:  Array<File> | null = null;
  resumesummaryFileChangeEvent(fileInput: any){
    this.resumesummaryFileToUpload = <Array<File>>fileInput.target.files;
  }

  previousWorkToUpload:  Array<File> | null = null;
  previousWorkChangeEvent(fileInput: any){
    this.previousWorkToUpload = <Array<File>>fileInput.target.files;
  }
}