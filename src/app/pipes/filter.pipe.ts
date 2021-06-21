import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<any>,filterString: string): any {
  if(values && filterString)
    return values.filter((d) => (d.productName.indexOf(filterString) > -1) || (d.productDescription.indexOf(filterString) > -1));
  return values;  
  }

}
