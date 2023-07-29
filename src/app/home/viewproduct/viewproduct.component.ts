import { Component, OnInit } from '@angular/core';
import { PostadService} from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  constructor(private postAd:PostadService,
        private actRoute: ActivatedRoute,){}
  productId!:number;
  model:PostAd[]=[]
  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];

   this.postAd.getProductById(this.productId).subscribe((res)=>{this.model=res; }  )
  }

}
