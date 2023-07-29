import { Component, OnInit } from '@angular/core';
import { PostadService } from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private ad: PostadService) { }
  adDetails: PostAd[] = [];
  searchText:any;

  ngOnInit(): void 
  {
    this.ad.getAd().subscribe((res)=>{
      this.adDetails=res;
    })
  }


}
