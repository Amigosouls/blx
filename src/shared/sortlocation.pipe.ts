import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SortlocationPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item: { adtitle: string; city: string; }) => {
      const itemTitle = item.adtitle.toLowerCase();
      const itemLocation = item.city.toLowerCase();
      return itemTitle.includes(searchText) || itemLocation.includes(searchText);
    });
  }

}
