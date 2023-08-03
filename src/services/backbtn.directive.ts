import { Directive, HostListener } from '@angular/core';
import { NavigationService } from './navigation.service';
@Directive({
  selector: '[appBackbtn]'
})
export class BackbtnDirective {

  constructor(private navigation:NavigationService) { }
  @HostListener('click')
  onClick(): void{
    this.navigation.back();
  }

}
