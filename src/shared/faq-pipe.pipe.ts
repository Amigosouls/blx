import { Pipe, PipeTransform } from '@angular/core';
import { faq } from 'src/models/helpModel';

@Pipe({
  name: 'faqPipe'
})
export class FaqPipePipe implements PipeTransform {

  transform(value: faq[], searchValue: string): faq[] {
    if(value===undefined || searchValue===""){
      return value;
    }

    return value.filter((faq)=>{
      return faq.title.toLowerCase().includes(searchValue.toLowerCase());
    })
  }

}
