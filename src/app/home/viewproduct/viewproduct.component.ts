import { Component, OnInit } from '@angular/core';
import { PostadService } from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from 'src/services/favourites.service';
import { Favourites } from 'src/models/favourites';
import { RegisterationService } from 'src/services/registeration.service';
import { user_details } from 'src/models/user_details';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent implements OnInit {
  constructor(private postAd: PostadService,
    private actRoute: ActivatedRoute, private favService: FavouritesService, private registerService: RegisterationService, private router: Router,) { }

  productId!: number;
  userId!: number;
  model: PostAd[] = [];
  userInfo!:user_details;
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

  // getUserInfo(userId: number) {
  //   this.registerService.getUserName(userId).subscribe((res) => {
  //     this.userInfo = res;
  //     console.log(this.userInfo);
  //   })
  // }
name:string="";
ngOnInit() {
  this.productId = this.actRoute.snapshot.params['id'];

  this.postAd.getProductById(this.productId).subscribe((res) => {
    this.model = res;
    this.activeUserId = this.model[0].user_id;
    console.log(this.activeUserId);
          this.registerService.getUserName(this.activeUserId).subscribe((res)=>{
            this.postedUser=res;
          })
  });

}

  activeUserId: number = 0;
  fav: Favourites = {
    brand: '',
    year: 0,
    kmdriven: 0,
    adtitle: '',
    description: '',
    price: 0,
    city: '',
    imagelink: '',
    user_id: 0,
  };

  addtoFav(products: Favourites) {


    this.registerService.getActiveUser().subscribe(
      (response) => {
        this.fav.brand = products.brand;
        this.fav.year = products.year;
        this.fav.kmdriven = products.kmdriven;
        this.fav.adtitle = products.adtitle;
        this.fav.description = products.description;
        this.fav.price = products.price;
        this.fav.city = products.city;
        this.fav.imagelink = products.imagelink;
        this.fav.user_id = response[0].id;
        console.log(this.activeUserId);
        const token = localStorage.getItem('token');
        if (token) {
          this.favService.addtoFav(this.fav);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Please login to continue',
            text: 'You need an account for adding favourite list',
          });
          this.router.navigate(['/signin']);
        }
      }
    )
  }


}
