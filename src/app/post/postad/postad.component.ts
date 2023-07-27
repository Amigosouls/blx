import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder,
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
  includeDetails!:FormGroup;
  setPrice!:FormGroup;
  finalize!:FormGroup;
  brand!:FormControl;
  year !:FormControl;
  kmdriven!:FormControl;
  adtitle!:FormControl;
  description!:FormControl;
  price!:FormControl;
  imagelink!:FormControl;




  constructor(
    private router: ActivatedRoute, 
  ) {}
  id!: string;
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.brand = new FormControl('',Validators.required);
    this.year = new FormControl('',Validators.required);
    this.kmdriven = new FormControl('',Validators.required);
    this.adtitle = new FormControl('',Validators.required);
    this.description = new FormControl('',Validators.required);
    this.price = new FormControl('',Validators.required);
    this.imagelink = new FormControl('',Validators.required);
    this.setPrice = new FormGroup({
      price:this.price
    })
    this.includeDetails = new FormGroup(
      {
        brand:this.brand,
        year :this.year,
        kmdriven:this.kmdriven,
        adtitle:this.adtitle,
        description:this.description
      }
    );
    this.finalize =new FormGroup({
      imagelink:this.imagelink
    })
    
    this.postAdForm=new FormGroup({
      brand:this.brand,
      year:this.year,
      kmdriven:this.kmdriven,
      adtitle:this.adtitle,
      description:this.description,
      price:this.price,
      imagelink:this.imagelink,
    })

    
    // this.postAdForm = new FormGroup({
    //   brand : this.brand,
    //   year : this.year,
    //   kmdriven : this.kmdriven,
    //   adtitle : this.adtitle,
    //   description : this.description,
    //   price : this.price,
    //   imagelink : this.imagelink,

    // });
   
  }
  setimageLink(link : any){
    console.log(link.imageURL);
  }
  getImage(){
    fetch(`https://pixabay.com/api/?key=36007746-b36ae27c3528436e0e7b2219a&q=${this.id}&image_type=photo&category=transportation&min_width=300&min_height=400&order=popular`,{method:"GET"  //api link from pixaby
    }).then(res => res.json())
    .then(image=>{
        console.log(image);
        this.bikeList=image.hits;
    
    })
  }
  onSubmission(form:FormGroup){
    form.value.brand=this.selectedNodes.label;
    console.log(form.value);
  }
}
