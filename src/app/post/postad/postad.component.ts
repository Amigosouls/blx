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
      key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
    }
  ];
 bikeList:Array<any>=[]
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
  getImage(vechicle:string){
    fetch(`https://pixabay.com/api/?key=36007746-b36ae27c3528436e0e7b2219a&q=${q}&image_type=photo&category=${category}&min_width=300&min_height=400&order=${order}`,{method:"GET"  //api link from pixaby
    }).then(res => res.json())
    .then(image=>{
        
    
    })
}
}
