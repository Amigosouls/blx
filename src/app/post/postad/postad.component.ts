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
  selectedNodes: any;
  nodes: any[] = [
    {
      key: '0',
      label: 'TVS',
      data: 'Documents Folder',
      children: [
        {
          key: '0-0',
          label: 'APACHE',
          data: 'Work Folder',
        },
        {
          key: '0-1',
          label: 'SPORT',
          data: 'Home Folder',
        },
        {
          key: '0-2',
          label: 'STAR CITY',
          data: 'Home Folder',
        },
      ],
    },
    {
      key: '1',
      label: 'BAJAJ',
      data: 'Documents Folder',
      children: [
        {
          key: '1-0',
          label: 'DOMINAR',
          data: 'Work Folder',
        },
        {
          key: '1-1',
          label: 'PULSAR',
          data: 'Home Folder',
        },
        {
          key: '1-2',
          label: 'PLATINA',
          data: 'Home Folder',
        },
      ],
    },
    {
      key: '2',
    label: 'HERO',
    data: 'Documents Folder',
    children: [
        {
            key: '2-0',
            label: 'X-PULSE',
            data: 'Work Folder',
        },
        {
            key: '2-1',
            label: 'GLAMOUR',
            data: 'Home Folder',
        },
        {
          key: '2-2',
          label: 'SPLENDOR',
          data: 'Home Folder',
      },

    ]
    },
    {
      key: '3',
    label: 'YAMAHA',
    data: 'Documents Folder',
    children: [
        {
            key: '3-0',
            label: 'MT',
            data: 'Work Folder',
        },
        {
            key: '3-1',
            label: 'R15',
            data: 'Home Folder',
        },
        {
          key: '3-2',
          label: 'FZ',
          data: 'Home Folder',
      },

    ]
    },
    {
      key: '4',
    label: 'HONDA',
    data: 'Documents Folder',
    children: [
        {
            key: '4-0',
            label: 'SHINE',
            data: 'Work Folder',
        },
        {
            key: '4-1',
            label: 'UNICORN',
            data: 'Home Folder',
        },
        {
          key: '4-2',
          label: 'HIGHNESS',
          data: 'Home Folder',
      },

    ]
    }
  ];
  bikeList: Array<any> = [];
  postAdForm!: FormGroup;
  includeDetails!: FormGroup;
  setPrice!: FormGroup;
  finalize!: FormGroup;
  brand!: FormControl;
  year!: FormControl;
  kmdriven!: FormControl;
  adtitle!: FormControl;
  description!: FormControl;
  price!: FormControl;
  imagelink!: FormControl;

  constructor(private router: ActivatedRoute) {}
  id!: string;
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.brand = new FormControl('');
    this.year = new FormControl('', Validators.required);
    this.kmdriven = new FormControl('', Validators.required);
    this.adtitle = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.imagelink = new FormControl('', Validators.required);
    this.setPrice = new FormGroup({
      price: this.price,
    });
    this.includeDetails = new FormGroup({
      brand: this.brand,
      year: this.year,
      kmdriven: this.kmdriven,
      adtitle: this.adtitle,
      description: this.description,
    });
    this.finalize = new FormGroup({
      imagelink: this.imagelink,
    });

    this.postAdForm = new FormGroup({
      brand: this.brand,
      year: this.year,
      kmdriven: this.kmdriven,
      adtitle: this.adtitle,
      description: this.description,
      price: this.price,
      imagelink: this.imagelink,
    });
  }
  setimageLink(link: any) {
    console.log(link.imageURL);
  }
  getImage() {
    fetch(
      `https://pixabay.com/api/?key=36007746-b36ae27c3528436e0e7b2219a&q=${this.id}&image_type=photo&category=transportation&min_width=300&min_height=400&order=popular`,
      {
        method: 'GET', //api link from pixaby
      }
    )
      .then((res) => res.json())
      .then((image) => {
        console.log(image);
        this.bikeList = image.hits;
      });
  }
  onSubmission(form: FormGroup) {
    form.value.brand = this.selectedNodes.label;
    console.log(form.value);
  }
}
