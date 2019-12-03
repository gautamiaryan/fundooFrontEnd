import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { NgForm, FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
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
    private snackbar:MatSnackBar) {

     }

  ngOnInit() {
    this.registerForm=new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      mobileNumber:new FormControl('',[Validators.required])

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

       //this.router.navigateByUrl('/login');
   },
   (error: any) => {
       console.log( error);
       //this.registerForm.reset();
       this.snackbar.open(error.error.description, 'error', {duration: 3000});


   });
   }
   }

