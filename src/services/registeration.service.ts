import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { user_details } from 'src/models/user_details';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
constructor(private http:HttpClient,private alert:MessageService,private router:Router) { }

user_details_url=environment.user_details;

signUp(form:user_details){
  return this.http.post<user_details[]>(this.user_details_url, form).subscribe(
   {
    next:()=>{
      this.alert.add({
        key: 'tc',
        severity: 'success',
        summary: 'Success',
        detail: 'Registration Successful',
      });

      
    },
    error:()=>{
      console.log('error')
      this.alert.add({
        key: 'tc',
        severity: 'error',
        summary: 'Try again later',
        detail: 'Something went wrong',
      });
    }
   }
  );
  
}

signIn(){
  return this.http.get<user_details[]>(this.user_details_url);
}

getActiveUser(){
  return this.http.get<user_details[]>(this.user_details_url)
}

isLoggedIn(item:user_details,id:number){
  let reg = this.user_details_url +'/'+ id;
  item.islogged=true;
  return this.http.put(reg,item).subscribe(()=>{});
}
isLoggedOut(item:user_details,id:number){
  let reg = this.user_details_url +'/'+ id;
  item.islogged=false;
  return this.http.put(reg,item).subscribe(()=>{});
}
}
