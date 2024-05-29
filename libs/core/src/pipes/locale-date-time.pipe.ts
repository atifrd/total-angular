import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { LocaleDatePipe } from './locale-date.pipe';

@Pipe({
  name: 'localeDateTime'
})
export class LocaleDateTimePipe extends LocaleDatePipe implements PipeTransform {
  override transform(value: any,format? : string): any {
    return  super.transform(value, format ? format : this.locale.indexOf('fa') != -1 ? 'jYYYY-jM-jD , h:mm a' : 'MMM d, y, h:mm a');
  }
}
