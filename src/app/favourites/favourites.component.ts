import { Component, OnInit } from '@angular/core';
import { Favourites } from 'src/models/favourites';
import { FavouritesService } from 'src/services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private favService: FavouritesService) { }

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

  favData: any = [];

  favourites: Favourites[] = [];

  ngOnInit(): void {
    this.favService.getFavourites().subscribe(
      (res) => {
        this.favourites = res;
        console.log(this.favourites);
      });
  }
}
