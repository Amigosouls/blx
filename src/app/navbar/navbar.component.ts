import { Component, OnInit } from '@angular/core';
import { user_details } from 'src/models/user_details';
import { RegisterationService } from 'src/services/registeration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

 
export class NavbarComponent implements OnInit {
  constructor(private regService:RegisterationService){}
  hide!:boolean;
ngOnInit(): void {
  const token = localStorage.getItem('token')
  if(token){
    this.hide=true;
  }
  else{
    this.hide=false;
  }

  this.regService.authSubject.subscribe({
    next:(res)=>{
      this.hide=res;
    }
  });
}

logoutUser(){
    localStorage.removeItem('token');
    this.regService.getActiveUser().subscribe((res)=>{
      this.regService.isLoggedOut(res[0],res[0].id);
      this.regService.validateAuth(false);
    })
}

}
