import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {
  constructor(private router:Router){}
@Input() products:any;
public show:boolean = true;
toggle() {
  return   this.show = !this.show;
}
productId!: number;

viewProduct(id: number) {
  this.productId = id;
  return  this.router.navigate(['viewProduct/' + id]);
}
}
