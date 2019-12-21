import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //this.headers= new HttpHeaders( localStorage.getItem('token'));
    this.http.get("http://localhost:9090/notes?token="+localStorage.getItem('token')).subscribe((response)=>{
      console.log(response);
    })
  }

}
