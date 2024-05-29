import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})

export class EnumToArrayPipe implements PipeTransform {

  transform(data: Object) {
    if (!data) {
      return null;
    }    
    return Object.keys(data).filter(c => isNaN(+c));
  }

}
