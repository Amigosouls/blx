import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostAd } from 'src/models/postad';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostadService {

  constructor(private httpObj: HttpClient) { }
  postAd(adForm: PostAd) {
    this.httpObj.post(environment.post_Ad, adForm).subscribe();
  }

  getAd() {
    return this.httpObj.get<PostAd[]>(environment.post_Ad);
  }

  public searchTerm = new Subject<string>;

  changeSearchTerm(value: string) {
    this.searchTerm.next(value);
  }

  getProductById(id: number) {
  return  this.httpObj.get<PostAd[]>(environment.post_Ad + '?id=' + id);
  }


}
