import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faq } from 'src/models/helpModel';
import { FaqService } from 'src/services/faq.service';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css'],
})
export class HelpsComponent implements OnInit {
  faqs: faq[] = [];

  constructor(private router: Router, private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqService.getFaqData().subscribe({
      next: (res) => {
        this.faqs = res;
      },
    });
  }

  faqRouting(routerLink: string) {
    this.router.navigate(['faq/' + routerLink]);
  }
}
