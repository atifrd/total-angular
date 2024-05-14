import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-miladi-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './miladi-datepicker.component.html',
  styleUrl: './miladi-datepicker.component.css',
})
export class MiladiDatepickerComponent {
  date: FormControl = new FormControl();

  @Input() set JalaliDate(value: Date) {
    if (!value) return;
    console.log(`JalaliDate input in miladi component`);
    this.date = new FormControl(value.toISOString());
  }

  @Output() miladiDateChanged = new EventEmitter<Date>();

  constructor() {
    //this.setDateToNow();
  }

  setDateToNow() {
    this.date.setValue(new Date().toISOString());
  }

  miladiDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event && event.value) this.miladiDateChanged.emit(event.value);
  }

  onKeyup(event: KeyboardEvent) {
    if (event.key == '.') {
      this.setDateToNow();
      this.miladiDateChanged.emit(new Date());
    }
  }
}
