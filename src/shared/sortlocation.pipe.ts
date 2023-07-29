import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SortlocationPipe implements PipeTransform {
  // transform(items: Array<any>, filter: {[key:string]:any}):Array<any>[] {
  //   return items.filter(items=>{
  //     const notMatchingField=Object.keys(filter).find(key=>items[key]!==filter[key])
  //     return !notMatchingField;
  //   })
  // }

  transform(items: any, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item: { brand: string; city: string; }) => {
      const itemTitle = item.brand.toLowerCase();
      const itemLocation=item.city.toLowerCase();
      return itemTitle.includes(searchText)||itemLocation.includes(searchText);
    });
  }

}
