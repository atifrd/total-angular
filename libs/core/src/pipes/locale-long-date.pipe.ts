import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { LocaleDatePipe } from './locale-date.pipe';

@Pipe({
  name: 'localeLongDate'
})
export class LocaleLongDatePipe extends LocaleDatePipe implements PipeTransform {

  override transform(value: any): any {
    return super.transform(value, this.locale.indexOf('fa') != -1 ? 'jDD/jMMM/jYYYY' : 'MMM DD YYYY');
  }
}
