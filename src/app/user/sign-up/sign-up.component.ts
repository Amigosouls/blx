import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  myForm1!: FormGroup;
  First_Name!: FormControl;
  Last_Name!: FormControl;
  Email!: FormControl;

  ngOnInit(): void {
    this.First_Name = new FormControl('', [Validators.pattern(/^[a-zA-Z]{3,}$/)]);
    this.Last_Name = new FormControl('', [Validators.pattern(/^[a-zA-Z]{4,}$/)]);
    this.Email = new FormControl('', [Validators.required, Validators.email]);


    this.myForm1 = new FormGroup({
      firstname: this.First_Name,
      lastname: this.Last_Name,
      email: this.Email

    });
  }
  matcher = new MyErrorStateMatcher();
}
