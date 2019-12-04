import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { NgForm, FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private userservice:UserserviceService,
    private router:Router,
    private snackbar:MatSnackBar,
    private fb:FormBuilder) {
      

     }

  ngOnInit() {
    this.registerForm=new FormGroup({

      firstName:new FormControl(''),
      lastName:new FormControl(''),
      emailId:new FormControl(''),
      password:new FormControl(''),
      mobileNumber:new FormControl('')
    })
  }

  onSubmit(form: NgForm) {
    if (this.registerForm.invalid) {
        return;
   }
    console.log(this.registerForm.value);
   
     this.userservice.registration(this.registerForm.value).subscribe( (user) => {
       console.log(user);
       this.snackbar.open('registration successfully verify by email', 'Ok', {duration: 3000});

      
   },
   (error: any) => {
       console.log( error);
       this.snackbar.open(error.error.description, 'error', {duration: 3000});
   });
   }
  }

