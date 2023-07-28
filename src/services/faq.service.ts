import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { faq } from 'src/models/helpModel';

@Injectable({
  providedIn: 'root',
})
export class FaqService{
  constructor(private http: HttpClient) {}
  faqUrl = environment.faq;

  getFaqData() {
    return this.http.get<faq[]>(this.faqUrl);
  }
  
  getSingleFaq(link:string){
    const singleFaqurl=this.faqUrl+"/?routerLink="+link;
    return this.http.get<faq[]>(singleFaqurl)
  }

  postUserComment(formData:any){
    // const postUserUrl=this.


  }

}
