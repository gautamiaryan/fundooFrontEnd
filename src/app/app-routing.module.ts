import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  
  {path:'',component:LoginComponent},

  {path:"register",component:RegistrationComponent},

  {path:"forgetPassword",component:ForgetpasswordComponent},

  {path:"resetPassword/:token",component:ResetpasswordComponent},

  {path:"dashboard",component:DashboardComponent,
   children:[
     
     { 
      path:'', redirectTo:'notes', pathMatch:'full' 
    },
    { 
      path: 'notes', 
      component: NotesComponent 
    },
    {path:"createnote",component:CreatenoteComponent}
   ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
