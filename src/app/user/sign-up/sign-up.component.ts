import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  signupForm!: FormGroup;
  First_Name!: FormControl;
  Last_Name!: FormControl;
  Email!: FormControl;
  Password!: FormControl;
  State!:FormControl;
  //Confirm_Password!: FormControl;
  srcResult!:FormControl

  ngOnInit(): void {
    this.First_Name = new FormControl('', [ Validators.required,Validators.pattern(/^[a-zA-Z]{3,}$/), ]);
    this.Last_Name = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/), ]);
    this.Email = new FormControl('', [Validators.required, Validators.email]);
    this.Password = new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,}$/),])
    this.State = new FormControl('',[Validators.required])
    this.signupForm = new FormGroup({
      firstname: this.First_Name,
      lastname: this.Last_Name,
      email: this.Email,
      password:this.Password,
     // confirm_password:this.Confirm_Password,
      state:this.State
    });
  }
  matcher = new MyErrorStateMatcher();

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        console.log(this.srcResult)
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
      
      console.log(inputNode.files[0].name)
    }
  }
}
