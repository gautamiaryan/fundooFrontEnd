import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from '../services/note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from '../model/note';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  @Input() noteData:any;
  notes:Note= new Note();
  note:any;
  constructor(private router:Router,private noteservice:NoteServiceService,private snackbar:MatSnackBar) { }
  Token=localStorage.getItem('token')
  ngOnInit() {
  }
  
  getNoteId(items:any){
    this.notes.id=items.id;
  }
  delete(){
    this.noteservice.deleteNote(this.Token,this.notes.id).subscribe((note) =>
    {
      this.snackbar.open('Note deleted successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      console.log("hello"+error);
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  pin(){
    this.noteservice.pinNotes(this.Token,this.notes.id).subscribe((note) =>
    {

      this.snackbar.open('Note pinned successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      console.log("hello"+error);
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  unPinned(){
    this.noteservice.unPinNotes(this.Token,this.notes.id).subscribe((note) =>
    {

      this.snackbar.open('Note unpinned successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  archieve(){
    this.noteservice.archieveNote(this.Token,this.notes.id).subscribe((note) =>
    {

      this.snackbar.open('Note archieved successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }


  unarchieve(){
    this.noteservice.unarchieveNote(this.Token,this.notes.id).subscribe((note) =>
    {

      this.snackbar.open('Note unarchieved successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }


  trash(){
    this.noteservice.trashnote(this.Token,this.notes.id).subscribe((note) =>
    {

      this.snackbar.open('Note trashed successfully', 'Ok', { duration: 3000 });
         
    },
    (error: any) => {
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });

  }

  remainder(){

  }

  collabrator(){

  }

  addImages(){

  }

  changeColor(){

  }

 





}
