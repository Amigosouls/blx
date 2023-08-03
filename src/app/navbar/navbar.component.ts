import { Component, OnInit } from '@angular/core';
import { RegisterationService } from 'src/services/registeration.service';
import { PostadService } from 'src/services/postad.service';
import { Router, NavigationEnd } from '@angular/router';

import { ChatService } from 'src/services/chat.service';


import { user_details } from 'src/models/user_details';
import { chatdetails } from 'src/models/chat';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  constructor(private regService: RegisterationService, private router: Router, private postAd: PostadService,private chat:ChatService) { }
  hide!: boolean;
  showSearchBox: boolean = true;
  notifications:boolean=false;


  userlist: user_details[] = [];
  receiverId:number=0;

  Messages:chatdetails[]=[]






  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token) {
      this.hide = true;
    }
    else {
      this.hide = false;
    }

    this.regService.authSubject.subscribe({
      next: (res) => {
        this.hide = res;
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSearchBox = event.urlAfterRedirects === '/';
      }
    });
     this.regService.signIn().subscribe((res)=>{ 
      this.userlist=res;
      this.regService.authSubject.subscribe({
        next: (res) => {
          this.hide = res;
         
        }
      });
    }
     );


     //for getting the messages of active user 
     this.regService.getActiveUser().subscribe((activeUser)=>{
      this.receiverId=activeUser[0].id;     
      this.chat.receiveChatMessage(this.receiverId).subscribe((response)=>{
      this.Messages=response;
      console.log(this.Messages);
      });
     });
  }

  logoutUser() {
    const confirmation = confirm('You will be Logged out!');
    if (confirmation) {
      localStorage.removeItem('token');
      this.regService.getActiveUser().subscribe((res) => {
        this.regService.isLoggedOut(res[0], res[0].id);
        this.regService.validateAuth(false);
        this.router.navigate(["/"]);
        this.userlist=[];
        this.ngOnInit();
      })
    }
  }

  searchTermEmit(event: any) {
    console.log(event.target.value);
    this.postAd.changeSearchTerm(event.target.value);
  }



 

}

