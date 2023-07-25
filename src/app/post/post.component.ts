import { Component, OnInit } from '@angular/core';

import { MegaMenuItem } from 'primeng/api';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {
  items:MegaMenuItem[]=[];
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
