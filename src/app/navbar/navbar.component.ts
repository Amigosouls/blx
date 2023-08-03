import { Component, OnInit } from '@angular/core';
import { RegisterationService } from 'src/services/registeration.service';
import { PostadService } from 'src/services/postad.service';
import { Router, NavigationEnd } from '@angular/router';
import { ChatService } from 'src/services/chat.service';
import { user_details } from 'src/models/user_details';


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

  userlist: any[] = [];
  receiverId:number=0;

  activeUserData:user_details={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    state: '',
    islogged: false,
    user_id: 0,
    secret: '',
    avatar: '',
    id: 0
  }

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
    this.regService.authSubject.subscribe(
      (res)=>{
        if(res==true){
          this.regService.getActiveUser().subscribe(
            (users)=>{
              this.userlist=users;
              console.log(this.userlist);
              this.ngOnInit();
              console.log(res);

            }
          )    
        }    
        //this.ngOnInit();
      }
    )
    
  


    // this.chat.getReceiver().subscribe((res)=>{
    
    //   this.activeUserData=res;
  
    // })

    //     // //chat
    //     this.chat.receiveChatMessage(this.activeUserData.user_id).subscribe((res)=>{
  
  
    
    //     });


    //     console.log(this.activeUserData.user_id);
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
