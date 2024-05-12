import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JalaliDatepickerComponent } from './jalali-datepicker/jalali-datepicker.component';
import { MiladiDatepickerComponent } from './miladi-datepicker/miladi-datepicker.component';

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
})
export class MatCuppleDatepickerComponent {
  //2way databinding for parent of MatCuppleDatepickerComponent
  @Input() CupleDate: Date;
  @Output() CupleDateChange = new EventEmitter<Date>();

  public miladiDate: Date;
  public jalaliDate: Date;

  miladiDateChanged(miladiDate: Date) {
    if (!miladiDate) return;

    this.miladiDate = miladiDate;
    this.CupleDateChange.emit(miladiDate);
  }

  jalaliDateChanged(jalaliDate: Date) {
    if (!jalaliDate) return;

    this.jalaliDate = jalaliDate; //send jalali date to  miladi component to adjust itself
    this.CupleDateChange.emit(jalaliDate); //set value for parent of mat-cuple component
  }


}

interface CupleDate {
  jalalidate?: Date;
  miladidate?: Date;
}
