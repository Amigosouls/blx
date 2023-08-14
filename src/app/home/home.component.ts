import { Component, OnInit } from '@angular/core';
import { PostadService } from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
import { CommentsService } from 'src/services/comments.service';
import { user_details } from 'src/models/user_details';
import { RegisterationService } from 'src/services/registeration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private ad: PostadService,
    private cmntService: CommentsService,
    private userService : RegisterationService
  ) {}
  adDetails: PostAd[] = [];
  searchText: any;
  commentsList: Comment[] = [];
  userList: user_details[] = [];

  ngOnInit(): void {
    this.ad.getAd().subscribe((res) => {
      this.adDetails = res;
    });
    this.ad.searchTerm.subscribe((response) => {
      this.searchText = response;
    });
    this.cmntService.getUserComments().subscribe((res) => {
      this.commentsList = res;
    });
    this.userService.signIn().subscribe(
      (res)=>{
        this.userList = res;
      }
    )
  }
}
