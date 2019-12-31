import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { IconlistComponent } from './iconlist/iconlist.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { NotesComponent } from './notes/notes.component';
import { CreatelabelComponent } from './createlabel/createlabel.component';
import { DisplaylabelComponent } from './displaylabel/displaylabel.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { TrashnoteComponent } from './trashnote/trashnote.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    DisplayNotesComponent,
    IconlistComponent,
    CreatenoteComponent,
    NotesComponent,
    CreatelabelComponent,
    DisplaylabelComponent,
    SidenavComponent,
    EditComponent,
    TrashnoteComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  entryComponents:[EditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
