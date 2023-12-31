import { CdkMonitorFocus } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { PostAd } from 'src/models/postad';
import { PostadService } from 'src/services/postad.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  citiesData: string[] = [];
  productData: PostAd[] = [];

  constructor(private product: PostadService) {}

  ngOnInit(): void {
    this.product.getAd().subscribe({
      next: (response) => {
        this.productData = response;
     console.log('products data:',this.productData);

     for(let i=0;i<response.length;i++){
      if(!this.citiesData.includes(response[i].city)){
        this.citiesData.push(response[i].city);
      }
     }
     console.log(this.citiesData);
    
      }
    });
   
    
   
    for (const product1 of this.productData) {
    if(this.citiesData.includes(product1.city)){
      console.log("already exists")
    }
    else{
      this.citiesData.push(product1.city);
      console.log(this.citiesData);
    }
    }
  }
 
}


