import { Component,OnInit } from '@angular/core';
import { faq } from 'src/models/helpModel';


@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})
export class HelpsComponent implements OnInit {
faqs:faq[]=[
  {
    "title":'Contact Seller',
    "routerLink":'contactseller'
  },
  {
    "title":'Password Reset',
    "routerLink":"pwdreset"
  },
  {
    "title":'Contact Buyer',
    "routerLink":'contactbuyer'
  },
  
    {
      "title": "Create Account",
      "routerLink": "createaccount"
    },
    {
      "title": "Free Ad Posting",
      "routerLink": "postad"
    },
    {
      "title": "Edit or Delete Ad",
      "routerLink": "editdeletead"
    },
    {
      "title": "Report Suspicious Ad",
      "routerLink": "reportaduser"
    },
    {
      "title": "Posting Guidelines",
      "routerLink": "postingguidelines"
    }
  ]
  


 
    ngOnInit(): void {
    }

}
