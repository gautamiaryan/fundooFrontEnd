import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from '../services/note-service.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  popup:boolean=false;
  constructor(private router:Router,private noteservice:NoteServiceService ) { }
  note:Note =new Note();
  Token=localStorage.getItem('token')
  ngOnInit() {
  }


 onSubmit(){

  if(this.note.title){
    this.noteservice.addNote(this.note,this.Token).subscribe(notes=> {
      this.note=new Note();
      console.log(this.note)
    })
    
  }

 }
 onPopup(){
   this.popup=true;
 }
}
