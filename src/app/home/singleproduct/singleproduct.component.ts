import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favourites } from 'src/models/favourites';
import { PostAd } from 'src/models/postad';
import { FavouritesService } from 'src/services/favourites.service';
import { RegisterationService } from 'src/services/registeration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent implements OnInit {
  activeUserId: number = 0;
  constructor(private router: Router, private favService: FavouritesService, private registerService: RegisterationService) {

  }
  date = new Date();
  calculateDiff(date: string) {
    let d2: Date = new Date();
    let d1 = Date.parse(date); //time in milliseconds
    var timeDiff = d2.getTime() - d1;
    var diff = timeDiff / (1000 * 3600 * 24);
    var x;
    if (Math.floor(diff) == 0) {
      return x = "Today"
    } else if (Math.floor(diff) == 1) {
      return x = "Yesterday"
    }
    else {
      return x = Math.floor(diff) + " days ago";
    }
  }
  ngOnInit(): void {

  }




  @Input() products: any;
  public show: boolean = true;
  toggle() {
    return (this.show = !this.show);
  }
  productId!: number;

  viewProduct(id: number) {
    this.productId = id;
    return this.router.navigate(['viewProduct/' + id]);
  }



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
