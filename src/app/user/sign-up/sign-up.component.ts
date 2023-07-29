import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormBuilder,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { matchValidator } from 'src/shared/confirm-password';
import { RegisterationService } from 'src/services/registeration.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { user_details } from 'src/models/user_details';

// For Validation Messages
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private registeration: RegisterationService,
    private alert: MessageService,
    private router: Router
  ) {}

  signupForm!: FormGroup;
  First_Name!: FormControl;
  Last_Name!: FormControl;
  Email!: FormControl;
  Password!: FormControl;
  State!: FormControl;
  Confirm_Password!: FormControl;
  user_details: user_details[] = [];

  ngOnInit(): void {
    this.First_Name = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,}$/),
    ]);
    this.Last_Name = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{1,}$/),
    ]);
    this.Email = new FormControl('', [Validators.required, Validators.email]);
    this.Password = new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,}$/
      ),
    ]);
    this.Confirm_Password = new FormControl('', [
      Validators.required,
      matchValidator('password'),
    ]);
    this.State = new FormControl('', [Validators.required]);
    this.signupForm = new FormGroup({
      firstname: this.First_Name,
      lastname: this.Last_Name,
      email: this.Email,
      password: this.Password,
      confirmpassword: this.Confirm_Password,
      state: this.State,
      islogged: this.builder.control(false),
    });
  }
  matcher = new MyErrorStateMatcher();

  onSubmit() {
    this.registeration.signUp(this.signupForm.value);
  }
}
