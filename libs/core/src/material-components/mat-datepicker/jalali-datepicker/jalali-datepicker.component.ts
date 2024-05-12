import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { JalaliMomentDateAdapter } from './jalali-moment-provider/jalali-moment-date-adapter';
import {
  JALALI_MOMENT_FORMATS,
  MOMENT_FORMATS,
} from './jalali-moment-provider/jalali_moment_formats';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-jalali-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './jalali-datepicker.component.html',
  styleUrl: './jalali-datepicker.component.css',
  providers: [
    {
      provide: DateAdapter,
      useClass: JalaliMomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'fa' }, // en-GB  fr
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (locale: string) => {
        if (locale === 'fa') {
          return JALALI_MOMENT_FORMATS;
        } else {
          return MOMENT_FORMATS;
        }
      },
      deps: [MAT_DATE_LOCALE],
      // useValue: JALALI_MOMENT_FORMATS
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
})
export class JalaliDatepickerComponent {
  date = new FormControl(new Date().toISOString());

  @Output() jalaliDateChanged = new EventEmitter<Date>();

  @Input() set miladidate(value: Date) {
    if (!value) return;
    console.log(`miladidate input in jalali component`);
    this.date = new FormControl(value.toISOString());
  }

  jalaliDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event && event.value) this.jalaliDateChanged.emit(event.value);
  }
}
