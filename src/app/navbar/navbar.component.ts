import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

 
export class NavbarComponent implements OnInit {
  hide!:boolean;
ngOnInit(): void {
  const token = localStorage.getItem('token')
  if(token){
    this.hide=true;
  }
  else{
    this.hide=false;
  }

}

}
