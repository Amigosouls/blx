import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { faq } from 'src/models/helpModel';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class FaqService{
  constructor(private http: HttpClient) {}
  faqUrl = environment.faq;
  userCommentUrl=environment.userComments;

  getFaqData() {
    return this.http.get<faq[]>(this.faqUrl);
  }
  
  getSingleFaq(link:string){
    const singleFaqurl=this.faqUrl+"/?routerLink="+link;
    return this.http.get<faq[]>(singleFaqurl)
  }

  postUserComment(formData:any){
    return this.http.post(this.userCommentUrl,formData).subscribe(()=>{
      Swal.fire({
        icon:'success',
        title:'Thank You',
        text:"Your Feedback Matters The Most For Us",
        showConfirmButton:false,
        timer:3000
      })
    })


  }

}
