import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css'],
})
export class PostadComponent implements OnInit {
  isLinear = false;
  selectedNodes: any;
  nodes: any[]=[
    {
      key:0,
      label:"TVS",
      children:[
        {
          key:0-0,
          label:"Apache"
        }
      ]
    }
  ];
 // bikeList:Array<string>=["TVS","Bajaj","Hero","YAMAHA","KTM","RE","HONDA",""]
  postAdForm!: FormGroup;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(
    private fb : FormBuilder,
    private router: ActivatedRoute, 
  ) {
    this.postAdForm = fb.group({
      
    });
  }
  id!: string;
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.firstFormGroup=this.fb.group({
      firstCtrl: ['', Validators.required],
    }),
    this.secondFormGroup= this.fb.group({
      secondCtrl: ['', Validators.required],
    })
  
  }
}
