import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostAd } from 'src/models/postad';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostadService {

  constructor(private httpObj:HttpClient) { }
  postAd(adForm:PostAd){
    this.httpObj.post(environment.post_Ad,adForm).subscribe();
  }

}
