import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  constructor(private actRoute: ActivatedRoute) {}

  questionTitle:string=''
  ngOnInit(): void {
    this.questionTitle=this.actRoute.snapshot.params['id'];
    console.log(this.questionTitle);
  }
}
