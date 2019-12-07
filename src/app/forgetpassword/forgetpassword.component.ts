import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { NgForm, FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetPassword:FormGroup
  constructor(private userservice:UserserviceService,
    private router:Router,
    private snackbar:MatSnackBar){ }

  ngOnInit() {
    this.forgetPassword=new FormGroup({
      emailId:new FormControl()
    })

  }

  onSubmit(form: NgForm) {
    if (this.forgetPassword.invalid) {
        return;
   }
    console.log(this.forgetPassword.value);
   
     this.userservice.forgetpassword(this.forgetPassword.value).subscribe( (user) => {
       console.log(user);
       this.snackbar.open('Reset Password link sent', 'Ok', {duration: 3000});
       
   },
   (error: any) => {
       console.log( error);
       this.snackbar.open(error.error.description, 'error', {duration: 3000});
   });
   }


}
