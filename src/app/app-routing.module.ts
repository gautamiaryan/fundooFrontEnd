import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  
  {path:"register",component:RegistrationComponent},

  {path:"forgetPassword",component:ForgetpasswordComponent},

  {path:"resetPassword/:token",component:ResetpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
