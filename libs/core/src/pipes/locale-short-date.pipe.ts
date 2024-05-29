import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { LocaleDatePipe } from './locale-date.pipe';

@Pipe({
  name: 'localeShortDate'
})
export class LocaleShortDatePipe extends LocaleDatePipe implements PipeTransform {
 override transform(value: any): any {
    if (!value || value === undefined || value === null)
      return '';

    return super.transform(value, this.locale.indexOf('fa') != -1 ? 'jYYYY/jMM/jDD' : 'MMM d, y');
  }

}
