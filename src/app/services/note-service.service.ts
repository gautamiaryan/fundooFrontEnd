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

    return this.http.post<any>(this.API_URL+"/notes/create",Note,{headers: new HttpHeaders().set('token', token) });


  }

  getAllNotes(token:string):Observable<any>{
     return this.http.get<any>(this.API_URL+"/notes", {headers: new HttpHeaders().set('token',  token) });
  }

  updateNote(Note:any,token:string,id:Number):Observable<any>{
    console.log(id);
    
    return this.http.post<any>(this.API_URL+"notes/update/"+id,Note,{headers: new HttpHeaders().set('token',  token) })

  }

  
}
