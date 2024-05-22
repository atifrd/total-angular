import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JalaliDatepickerComponent } from './jalali-datepicker/jalali-datepicker.component';
import { MiladiDatepickerComponent } from './miladi-datepicker/miladi-datepicker.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-mat-cupple-datepicker',
  standalone: true,
  templateUrl: './mat-cupple-datepicker.component.html',
  styleUrl: './mat-cupple-datepicker.component.scss',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    JalaliDatepickerComponent,
    MiladiDatepickerComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MatCuppleDatepickerComponent,
    },
  ],
})
export class MatCuppleDatepickerComponent implements ControlValueAccessor {
  //تاریخ در نهایت به صورت
  //utc
  // به فرم والد ارسال مس شود
  //#region ControlValueAccessor implementation
  onChange = (value: Date) => {};
  onTouched: Function = () => {};
  onWriteValue: Function = () => {};

  //called by the Forms module to write a value into a form control
  writeValue(value: Date) {
    this.miladiDate = value;
    this.jalaliDate = value;
  }
  //report the value back to the parent form
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  //In order to report to the parent form that the control was touched
  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  //#endregion

  public miladiDate: Date;
  public jalaliDate: Date;

  miladiDateChanged(miladiDate: Date) {
    if (!miladiDate) return;

    this.miladiDate = miladiDate;

    let utcDate = miladiDate.getUtcFullDate();
    this.onChange(miladiDate);
  }

  jalaliDateChanged(jalaliDate: Date) {
    if (!jalaliDate) return;

    this.jalaliDate = jalaliDate; //send jalali date to  miladi component to adjust itself
    let jalalidateValue = new Date(jalaliDate.toISOString());
    let utcDate = jalalidateValue.getUtcFullDate();

    this.onChange(utcDate);
  }
}

// interface CupleDate {
//   jalalidate?: Date;
//   miladidate?: Date;
// }
