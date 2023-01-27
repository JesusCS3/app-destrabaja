import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Auth } from 'aws-amplify';
import { userModel } from 'src/app/models/userModel';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  /* *** login variables *** */
  public user:user;
  public status:string;
  public identity:any;
  public idToken:any;
  email: string;
  username: string = "";
  phone: string = "";
  password: string;

  /* *** current session variables *** */
  attributes: any;
  id: string= '';
  given_name: string= '';
  token: string = '';

  /* *** variables for verify *** */
  verifying: boolean = false;
  verifyCode: string;

  /* *** show and hide password *** */
  @ViewChild('asPassword') pass!: ElementRef;
  @ViewChild('eyeShow') eyeShow!: ElementRef;
  @ViewChild('eyeHide') eyeHide!: ElementRef;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private renderer2: Renderer2, 
    private AuthService: AuthService,
    private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) { 
    // customize default values of modals
		config.backdrop = 'static';
    config.centered = true;
  }

  ngOnInit(): void {
  }

  // show password in login form
  show(): void{
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'text');
    this.renderer2.addClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-none');
    this.renderer2.addClass(hide, 'd-block');
  }

  // hide password in login form
  hide(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'password');
    this.renderer2.removeClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-block');
    this.renderer2.addClass(hide, 'd-none');
  }

  /* *** signin Cognito with email account *** */
  signinCognitoMsg:string;
  onSigninCognito(signinMessage:any): void {
      var credentials = {
      username: this.email,
      password: this.password
    }
    // submit data for Login
    Auth.signIn(credentials).then( data => {
      // get current session
      Auth.currentSession().then(data => {
        // get data for userModel
        this.attributes = data;
        this.id = this.attributes.idToken.payload.sub; 
        this.given_name = this.attributes.idToken.payload.given_name;
        this.token = JSON.stringify(this.attributes.idToken.jwtToken);

        let modelo = new userModel();
        modelo.userName = this.email;
        modelo.email = this.email;
        modelo.given_name = this.given_name;
        modelo.idToken = this.token;

        this.AuthService.storeSessionDataLocally(modelo);
      })
      .catch(err => {
        console.log(err);
      });
      
      this.router.navigate(['/home-page']);
    })
    .catch(err => {
      if (err.message == 'User is not confirmed.'){
        Auth.resendSignUp(credentials.username).then(data => {
          this.verifying = true;
          this.signinCognitoMsg = "Aún no confirmas tu cuenta, te hemos enviado un correo con el código de verficación";
          this.modalService.open(signinMessage);
        }).catch((err) => {
          this.signinCognitoMsg = err.message || JSON.stringify(err);
          this.modalService.open(signinMessage);
        });
      }

      this.signinCognitoMsg = err.message || JSON.stringify(err);
      this.modalService.open(signinMessage);
    });
  }

  /* *** verify with cognito *** */
  onVerify(signinMessage:any){
    Auth.confirmSignUp(this.email, this.verifyCode, { forceAliasCreation: true }).then(data => {
      this.verifying = false;
      this.signinCognitoMsg = "Tu correo ha sido verificado.";
      this.modalService.open(signinMessage);
      this.router.navigate(['/home-page']);
    }).catch(err => {
      this.signinCognitoMsg = err.message || JSON.stringify(err);
      this.modalService.open(signinMessage);
    });
  }

  /* *** signin with facebook account *** */
  onSigninFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  /* *** signin with google account *** */
  onSigninGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

  /* *** signin Destrabaja *** */
  signinMsg:string;
  onSignin(signin:any){
    let userSignin = new user(this.id, this.username, this.email, this.phone, this.password);
    
      this.userService.signinUser(userSignin, null).subscribe({
      next: (response) => {
        this.identity = response.user;
        if (!this.identity || !this.identity._id){
          this.signinMsg = 'No se ha podido identificar al usuario.';
          this.modalService.open(signin);
        }

        localStorage.setItem('identity', JSON.stringify(this.identity));
        this.getToken();
      },
      error: (err) => {
        this.signinMsg = err.error.message;
        this.modalService.open(signin);
      }
    });
  }

  getToken(){
    let userSignin = new user(this.id, this.username, this.email, this.phone, this.password);
    
      this.userService.signinUser(userSignin, 'true').subscribe({
      next: (response) => {
        this.token = response.token;
        if (this.token.length <= 0){
          console.log('Unable to recover token');
        }else{
          //console.log('Token recovered');
          localStorage.setItem('token', this.token);
          this.getCounters(userSignin.id);
          //this.router.navigate(['/home-page']);

        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCounters(userId: string | null | undefined){
    this.userService.getCounters(userId).subscribe({
      next: (response: any) => {
        localStorage.setItem('stats', JSON.stringify(response));
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
