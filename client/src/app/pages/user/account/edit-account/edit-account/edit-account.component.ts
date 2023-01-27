import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit{

  /* *** variables for user *** */
  public user:user;
  public identity:any;
  public token:any;

  userCognito:string;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    /* receive data */
    this.user = this.userService.getIdentity();
    this.identity = this.user;
    this.token = this.userService.getToken();

    // customize default values of modals
		config.backdrop = 'static';
    config.centered = true;
   }

  ngOnInit(): void {
  }

  updateUserOne(){
    console.log(this.user.id);
    console.log(this.identity._id);
    /* save data to cognito */
    this.userCognito = this.user.username;
  }

   /* *** update user *** */
  updateMsg:string;
  /* save user information */
  updateUser(updateUser:any){
    this.userService.updateUser(this.identity).subscribe({
      next: (response) => {
        if(response.user){
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.identity = this.user;
          this.updateMsg = 'Datos de usuario actualizados con éxito.';
          this.modalService.open(updateUser);
        }else{
          this.updateMsg = response.message;
          this.modalService.open(updateUser);
        }
      },
      error: (err) => {
        this.updateMsg = err.error.message;
        this.modalService.open(updateUser);
        console.log(err);
      }
    });
  }
}
