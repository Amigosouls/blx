import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Favourites } from 'src/models/favourites';
import { FavouritesService } from 'src/services/favourites.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {
  constructor(private router: Router, private favService: FavouritesService) { }
  @Input() products: any;
  public show: boolean = true;
  toggle() {
    return this.show = !this.show;
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
    user_id: 0
  }
  
  addtoFav(products: any) {
    this.fav.brand = products.brand;
    this.fav.year = products.year;
    this.fav.kmdriven = products.kmdriven;
    this.fav.adtitle = products.adtitle;
    this.fav.description = products.description;
    this.fav.price = products.price;
    this.fav.city = products.city;
    this.fav.imagelink = products.imagelink;
    this.fav.user_id = products.user_id;
    this.favService.addtoFav(this.fav);
  }
}
