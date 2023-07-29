import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortlocation'
})
export class SortlocationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
