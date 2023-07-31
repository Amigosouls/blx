import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { user_details } from 'src/models/user_details';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
constructor(private http:HttpClient,private alert:MessageService,private router:Router) { }

user_details_url=environment.user_details;

public authSubject=new Subject<boolean>;
validateAuth(state:boolean){
  this.authSubject.next(state);
}

 // setting a value based on subject
 status?: boolean;
 getAuthStatus() {
   this.authSubject.subscribe(
     res => {
       this.status = res;
     }
   );
   return this.status;
 }

signUp(form:user_details){
  return this.http.post<user_details[]>(this.user_details_url, form).subscribe(
   {
    next:()=>{
     
      setTimeout(() => {
        this.router.navigate(['/signin']);
      }, 1000);
      
      
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
  return this.http.get<user_details[]>(this.user_details_url+'/?islogged_like=true');
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

getUserByMail(){
  return this.http.get<user_details[]>(this.user_details_url+'/?email_like=true');
}
putUser(userId:number,data:user_details){
  this.http.put(environment.user_details+`/${userId}`,data).subscribe();
}

}
