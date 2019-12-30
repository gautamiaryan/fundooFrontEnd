import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NoteServiceService } from '../services/note-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  notes:[];
  getAllNotes:[];
  constructor(private noteservice:NoteServiceService) { }

  ngOnInit() {
    this.noteservice.getAllNotes(localStorage.getItem('token')).subscribe((response:any)=>
    {
      console.log(response);
      
      this.notes=response.object;
         
    })
    
    
  }


}
