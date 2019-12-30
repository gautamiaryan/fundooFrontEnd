import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private API_URL=environment.notesApiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {
    
  }

  addNote(Note:any,token :string):Observable<any>{

    return this.http.post<any>("http://localhost:9090/notes/create",Note,{headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });


  }

  getAllNotes(token:string):Observable<any>{
     return this.http.get<any>("http://localhost:9090/notes", {headers: new HttpHeaders().set('token',  token) });
  }

  
}
