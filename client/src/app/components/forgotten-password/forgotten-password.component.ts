import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  email = '';
  attributes: any;
  destinationEmail = '';
  password = '';
  confirmPassword = '';

  verifying = false;
  verifyCode = '';

  // elements new password
  @ViewChild('asPassword') pass!: ElementRef;
  @ViewChild('eyeShow') eyeShow!: ElementRef;
  @ViewChild('eyeHide') eyeHide!: ElementRef;

  // elements confirm password
  @ViewChild('confirmasPassword') confirmPass!: ElementRef;
  @ViewChild('confirmeyeShow') confirmEyeShow!: ElementRef;
  @ViewChild('confirmeyeHide') confirmEyeHide!: ElementRef;

  constructor(
    private router: Router, 
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
  }

  // show new password
  show(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'text');
    this.renderer2.addClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-none');
    this.renderer2.addClass(hide, 'd-block');
  }
  // hide new password
  hide(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'password');
    this.renderer2.removeClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-block');
    this.renderer2.addClass(hide, 'd-none');
  }

  // show confirm password
  showConfirmPassword(): void {
    const confirmasPassword = this.confirmPass.nativeElement;
    const confirmshow = this.confirmEyeShow.nativeElement;
    const confirmhide = this.confirmEyeHide.nativeElement;

    this.renderer2.setAttribute(confirmasPassword, 'type', 'text');
    this.renderer2.addClass(confirmshow, 'd-none');
    this.renderer2.removeClass(confirmhide, 'd-none');
    this.renderer2.addClass(confirmhide, 'd-block');
  }
  // hide confirm password
  hideConfirmPassword(): void {
    const confirmasPassword = this.confirmPass.nativeElement;
    const confirmshow = this.confirmEyeShow.nativeElement;
    const confirmhide = this.confirmEyeHide.nativeElement;

    this.renderer2.setAttribute(confirmasPassword, 'type', 'password');
    this.renderer2.removeClass(confirmshow, 'd-none');
    this.renderer2.removeClass(confirmhide, 'd-block');
    this.renderer2.addClass(confirmhide, 'd-none');
  }

  forgotPassword(){

    const userName = this.email;

    // Send confirmation code to user's email
    Auth.forgotPassword(userName).then(data => {
      this.verifying = true;
      alert("Te hemos enviado un correo con el código de verficación");
      console.log(data);
      this.attributes = data.CodeDeliveryDetails;
      this.destinationEmail = this.attributes.Destination;
      console.log(this.destinationEmail);
    }).catch(err => {
      alert(err.message || JSON.stringify(err))
      console.log(err)
    });
  }

  newPassword(){
    // Collect confirmation code and new password, then
    Auth.forgotPasswordSubmit(this.email, this.verifyCode, this.confirmPassword).then(data => {
      this.verifying = false;
      alert("Has cambiado tu contraseña");
      this.router.navigate(['/singin']);
      console.log(data)
    }).catch(err => {
      alert(err.message || JSON.stringify(err))
      console.log(err)
    });
  }

}
