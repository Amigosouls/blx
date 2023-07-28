import { Component,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.css']
})
export class SingleLocationComponent implements OnInit {
  
  @Input()
  city:string='';

  constructor(private route:Router){}


  ngOnInit(): void {

  }

  routeLocation(cityLink:string){
   
    console.log(cityLink);
    this.route.navigate([""]);

  }


}
