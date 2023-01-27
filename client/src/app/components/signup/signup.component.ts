import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from 'aws-amplify';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  /* *** variables for user *** */
  public user:user;
  id: string = "";
  email: string;
  username: string;
  phone: string = "";
  password: string;

  /* *** variables for verify *** */
  verifying: boolean = false;
  verifyCode: string;

  /* *** show and hide password *** */
  @ViewChild('asPassword') pass!: ElementRef;
  @ViewChild('eyeShow') eyeShow!: ElementRef;
  @ViewChild('eyeHide') eyeHide!: ElementRef;

  constructor(
    private router: Router,
    private renderer2: Renderer2,
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

  // show password
  show(): void{
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'text');
    this.renderer2.addClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-none');
    this.renderer2.addClass(hide, 'd-block');
  }
  // hide password
  hide(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'password');
    this.renderer2.removeClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-block');
    this.renderer2.addClass(hide, 'd-none');
  }

  /* *** signup with cognito *** */
  signupCognitoMsg:string;
  onRegister(signupMessage:any) {
    const user = {
      username: this.email,
      password: this.password,
      attributes: {
        email: this.email,
        given_name: this.username
      }
    }
    Auth.signUp(user).then(data => {
      this.verifying = true;
      this.signupCognitoMsg = "Te hemos enviado un correo con el código de verficación";
      this.modalService.open(signupMessage);
    }).catch(err => {
      this.signupCognitoMsg = err.message || JSON.stringify(err);
      this.modalService.open(signupMessage);
    });
  }

  /* *** verify with cognito *** */
  verifyMsg:string;
  onVerify(verify:any){
    Auth.confirmSignUp(this.email, this.verifyCode, { forceAliasCreation: true }).then(data => {
      this.verifying = false;
      this.verifyMsg = "Tu correo ha sido verificado.";
      this.modalService.open(verify);
      this.router.navigate(['/signin']);
    }).catch(err => {
      this.verifyMsg = err.message || JSON.stringify(err);
      this.modalService.open(verify);
    });
  }

  /* *** signup with facebook account *** */
  onSigninFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  /* *** signup with google account *** */
  onSigninGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

  /* *** signup Destrabaja *** */
  signupMsg:string;
  /* save user information */
  onSignUp(signup:any){
    let userSignUp = new user(this.id, this.username, this.email, this.phone, this.password);
    
      this.userService.signupUser(userSignUp).subscribe({
      next: (response) => {
        if(response.user && response.user._id){
          //this.signupMsg = '¡Ahora puedes iniciar sesión en Destrabaja!';
          //this.modalService.open(signup);
          //this.router.navigate(['/signin']);
        }else{
          this.signupMsg = response.message;
          this.modalService.open(signup);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
