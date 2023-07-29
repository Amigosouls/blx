import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favourites } from 'src/models/favourites';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient) { }
  favurl = environment.favourites;

  getFavourites() {
    return this.http.get<Favourites[]>(this.favurl);
  }

  addtoFav(item: Favourites) {
    this.http.post<Favourites>(this.favurl, item).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Thank You',
        text: "Your Choice is added to Favourites",
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  removeFavorite(item: any) {
    this.http.delete<Favourites>(this.favurl + '/' + item.id).subscribe();
  }
}