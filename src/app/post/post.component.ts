import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MegaMenuItem } from 'primeng/api';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {
  items:MegaMenuItem[]=[];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.items = [
      {
          label: 'Cars',
          icon: 'pi pi-fw pi-car',
          items: [
              [
                  {
                      label: 'Cars'
                      
                  }
              ]
          ]
      },
      {
        label: 'Bikes',
        icon: 'pi pi-fw pi-car',
        items: [
            [
                {
                    label: 'Motocycles'
                    
                },
                {
                  label: 'Scooters'
                  
              },
              {
                label: 'Bicycles'
                
            },
                
            ]
        ]
      },
    ]
  }

}
