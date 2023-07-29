import { Component,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostadService } from 'src/services/postad.service';

@Component({
  selector: 'app-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.css']
})
export class SingleLocationComponent implements OnInit {
  
  @Input()
  city:string='';

  constructor(private route:Router,private postAd:PostadService){}


  ngOnInit(): void {

  }

  routeLocation(cityLink:string){
    this.postAd.changeSearchTerm(cityLink);
    // this.route.navigate(["/"]);

  }


}
