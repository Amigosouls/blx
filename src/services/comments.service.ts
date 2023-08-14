import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) 
  { }
  getUserComments(){
    return this.http.get<Comment[]>(environment.userComments);
  }


}
