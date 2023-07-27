import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faq } from 'src/models/helpModel';
import { FaqService } from 'src/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private faqservice: FaqService
  ) {}

  questionId: string = '';
  singleFaqData: faq[] = [];
  ngOnInit(): void {
    this.questionId = this.actRoute.snapshot.params['id'];
    console.log(this.questionId);
    this.faqservice.getSingleFaq(this.questionId).subscribe({
      next: (response) => {
        this.singleFaqData = response;
        console.log(this.singleFaqData);
      },
    });
  }
}
