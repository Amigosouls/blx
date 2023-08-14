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
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    private http:HttpClient,
    private router: Router
  ) { }

  signupForm!: FormGroup;
  First_Name!: FormControl;
  Last_Name!: FormControl;
  Email!: FormControl;
  Password!: FormControl;
  State!: FormControl;
  Confirm_Password!: FormControl;
  secret!: FormControl;
  avatar!:FormControl;
  user_details: user_details[] =[] ;
  characterName:Array<string>=[];
  avatarList:any[]=[];
selected_Avatar:string='';
hide = true;
c_hide = true;
emailExist:boolean=false;
  ngOnInit(): void {
    this.First_Name = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,}$/),
    ]);
    this.characterName=["Punk","Asian","Afrohair","Normiefemale","Older","Firehair","Batman","Wonder","Superman","Aesthetic","Monkey","Hero","Villain","Happy","Romeo","Cute","Cool","Angry","Crazy"];
    for (const charname of this.characterName) {
      this.avatarList.push("https://api.multiavatar.com/"+charname+".png?apikey=2PhfABEQ49tC1k");
    }
    this.Last_Name = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{1,}$/),
    ]);
    this.Email = new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[A-Za-z0-9._%+-]+@gmail\.com$"
      )]);
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
    this.secret = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{4,}$/),
    ]);
    this.avatar = new FormControl('',[Validators.required]);
    this.signupForm = new FormGroup({
      firstname: this.First_Name,
      lastname: this.Last_Name,
      email: this.Email,
      password: this.Password,
      confirmpassword: this.Confirm_Password,
      state: this.State,
     secret: this.secret,
     avatar: this.avatar,
      islogged: this.builder.control(false),
    });

    this.http.get<user_details[]>(environment.user_details).subscribe({
      next:(res)=>{
        this.user_details=res;
      }
    })
  }
  matcher = new MyErrorStateMatcher();
onSubmit() {
    this.registeration.signUp(this.signupForm.value);
  }
  avatar_click(img:string){
    this.selected_Avatar=img;
    }
    toggleVisibility(inp:string){
     if(inp=='password'){
      var passwordField=document.getElementById("password");
   const fieldType=passwordField?.getAttribute("type")==="password"?"text":"password";
  passwordField?.setAttribute("type",fieldType);
     }
    else if(inp=='confpass'){
      var passwordField=document.getElementById("confirmpass");
   const fieldType=passwordField?.getAttribute("type")==="password"?"text":"password";
  passwordField?.setAttribute("type",fieldType);
    }
    }

    emailCheck(event:any):void {
      this.emailExist=false;
    this.user_details.forEach(element => {
      if(element.email===event.target.value){
       this.emailExist=true;
       console.log(this.emailExist);
   
      }
    

    });
    }
}
