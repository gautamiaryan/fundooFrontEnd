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

  deleteNote(token:string,id:any):Observable<any>{
    return this.http.delete<any>(this.API_URL+"notes/delete/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  getTrashedNotes(token:string):Observable<any>{
    return this.http.get<any>(this.API_URL+"trashednotes",{headers: new HttpHeaders().set('token',  token) })
  }

  getArchivedNotes(token:string):Observable<any>{
    return this.http.get<any>(this.API_URL+"archievednotes",{headers: new HttpHeaders().set('token',  token) })
  }

  pinNotes(token:string,id:any):Observable<any>{

    return this.http.post<any>(this.API_URL+"notes/pinned/"+id,{headers: new HttpHeaders().set('token',  token) })
     
  }
  unPinNotes(token:string,id:any):Observable<any>{

    return this.http.post<any>(this.API_URL+"notes/unpinned/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  archieveNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.API_URL+"notes/archieve/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  unarchieveNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.API_URL+"notes/unarchieve/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  trashnote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.API_URL+"notes/trashed/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  restoreNote(token:string,id:any):Observable<any>{
    return this.http.post<any>(this.API_URL+"notes/restore/"+id,{headers: new HttpHeaders().set('token',  token) })
  }

  
}
