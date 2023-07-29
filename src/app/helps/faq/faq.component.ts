import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  onSubmit(form: any) {
    console.log("Form is submitted");
    this.faqservice.postUserComment(form.value);
    form.reset();

  }
  
  
  myForm1!: FormGroup;
  username: FormControl | any;
  email: FormControl | any;
  feedback: FormControl | any;
 

  questionId: string = '';
  singleFaqData: faq[] = [];

  ngOnInit(): void {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.feedback = new FormControl('',[
      Validators.required
    ]);
    this.myForm1 = new FormGroup({
      username: this.username,
       email: this.email,
      feedback: this.feedback
    });
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

