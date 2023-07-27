import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegisterationService } from 'src/services/registeration.service';
import { user_details } from 'src/models/user_details';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private router: Router,
    private alert: MessageService,
    private registeration: RegisterationService
  ) {}

  signinForm!: FormGroup;
  Email!: FormControl;
  Password!: FormControl;
  user_details: user_details[] = [];

  ngOnInit(): void {
    this.Email = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required]);
    this.signinForm = new FormGroup({
      email: this.Email,
      password: this.Password,
    });
  }
  matcher = new MyErrorStateMatcher();

  onSubmit() {
    this.registeration.signIn().subscribe((response) => {
      this.user_details = response;
      const user = this.user_details.find((a: any) => {
        if (
          a.email === this.signinForm.value.email &&
          a.password === this.signinForm.value.password
        ) {
          this.registeration.isLoggedIn(a, a.id);
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        localStorage.setItem('token', Math.random().toString());
        this.router.navigate(['/post'])
        this.signinForm.reset();
        this.alert.add({
                  key: 'tc',
                   severity: 'success',
                  summary: 'success',
                  detail: 'Login Successful',
                });
      }
      else
      {
        this.alert.add({
          key: 'tc',
           severity: 'error',
          summary: 'e-mail or password not matched',
          detail: 'Login Failed',
        });
        this.signinForm.reset();
      }
    });
  }
}

