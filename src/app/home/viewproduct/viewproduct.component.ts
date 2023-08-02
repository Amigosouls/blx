import { Component, OnInit } from '@angular/core';
import { PostadService } from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
import { ActivatedRoute } from '@angular/router';
import { RegisterationService } from 'src/services/registeration.service';
import { user_details } from 'src/models/user_details';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent implements OnInit {
  constructor(
    private postAd: PostadService,
    private actRoute: ActivatedRoute,
    private regServ:RegisterationService
  ) {}
  productId!: number;
  activeUserId: number = 0;
  model: PostAd[] = [];
  postedUser:user_details={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    state: '',
    islogged: false,
    user_id: 0,
    secret: '',
    id: 0
  }
  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];

    this.postAd.getProductById(this.productId).subscribe((res) => {
      this.model = res;
      this.activeUserId = this.model[0].user_id;
      console.log(this.activeUserId);
            this.regServ.getUserName(this.activeUserId).subscribe((res)=>{
              this.postedUser=res;
            })
    });
  
  }
}
