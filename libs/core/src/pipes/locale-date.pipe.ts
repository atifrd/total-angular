import { DatePipe } from '@angular/common';
import { PipeTransform, LOCALE_ID, Inject, Pipe } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'localeDate',
})
export class LocaleDatePipe implements PipeTransform {
  private datePipe: DatePipe;
  format: string = '';
  //locale: string = 'fa';
  constructor(@Inject(LOCALE_ID) public locale: any) {
    this.datePipe = new DatePipe(this.locale);
  }
  transform(value: any, format: string): unknown {
    try {
      this.format = format;
      if (!value || value === undefined || value === null) {
        return '';
      }

      //When locale is globally set to 'fa', it's also possible to use gregorian calendar for parsing a date. By setting { useGregorianParser: true } as second parameter of .locale() you can reach this. useGregorianParser default value is false in 'fa' locale.
      moment.locale('fa', { useGregorianParser: true });

      var ret = this.datePipe.transform(value, this.format);

      var jalali = moment(new Date(value), 'fa', this.format).format(
        this.format,
      );

      //return moment(value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'); // 1367/11/04
      return this.locale.indexOf('fa') != -1 ? jalali : ret;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}
