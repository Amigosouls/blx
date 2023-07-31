import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { PostadService } from 'src/services/postad.service';
import { PostAd } from 'src/models/postad';
import { MessageService } from 'primeng/api';
import { CitiesService } from 'src/services/cities.service';
import { Cities } from 'src/models/cities';
import { RegisterationService } from 'src/services/registeration.service';
import { VehicleService } from 'src/services/vehicle.service';
@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css'],
})
export class PostadComponent implements OnInit {
  selectedNodes: any;
  nodes: any[] = [];
  current_date = new Date();
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
  city!: FormControl;
  cityList: Cities[] = [];
  activeUserId = 0;

  constructor(
    private router: ActivatedRoute,
    private userObj: RegisterationService,
    private cityObj: CitiesService,
    private postAdObj: PostadService,
    private message: MessageService,
    private vehicleObj: VehicleService
  ) {}
  id = '';
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.brand = new FormControl('');
    this.year = new FormControl('', Validators.required);
    this.kmdriven = new FormControl('', Validators.required);
    this.adtitle = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.imagelink = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
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
      city: this.city,
    });

    this.postAdForm = new FormGroup({
      brand: this.brand,
      year: this.year,
      kmdriven: this.kmdriven,
      adtitle: this.adtitle,
      description: this.description,
      price: this.price,
      imagelink: this.imagelink,
      city: this.city,
    });
    this.cityObj.getcities().subscribe((res) => {
      this.cityList = res;
      this.cityList.sort();
    });
    this.userObj.getActiveUser().subscribe((res) => {
      this.activeUserId = res[0].id;
    });
    this.vehicleObj.getVehicles(this.id).subscribe((res) => {
      this.nodes=res;
      console.log(res);
    });
  }

  setimageLink(link: any) {
    this.imagelink.setValue(link.previewURL);
  }
  getImage() {
    fetch(
      `https://pixabay.com/api/?key=36007746-b36ae27c3528436e0e7b2219a&q=${this.id}+full+image&image_type=photo&min_width=300&per_page=100&min_height=400&order=latest`,
      {
        method: 'GET', //api link from pixaby
      }
    )
      .then((res) => res.json())
      .then((image) => {
        console.log(image);
        for(var i=0;i<=20;i++){
          this.bikeList[i]=image.hits[Math.floor(Math.random() * 100)];

        }
        console.log(this.bikeList)
      });
  }
  onSubmission(form: PostAd) {
    form.brand = this.selectedNodes.label;
    form.user_id = this.activeUserId;
    form.date = this.current_date.toLocaleDateString();
    this.postAdObj.postAd(form);
    this.message.add({
      severity: 'success',
      summary: 'POST AD',
      detail: 'Ad Posted Successfully',
    });
  }
}
