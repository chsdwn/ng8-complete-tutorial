import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, propertyName: string) {
    return value.sort((a, b) => {
      return a[propertyName] > b[propertyName] ? 1 : -1;
    });
  }
}
