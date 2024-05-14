import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'lib-mat-price-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './mat-price-input.component.html',
  styleUrl: './mat-price-input.component.scss',
  providers: [provideNgxMask()],
})
export class MatPriceInputComponent {
  priceInput: any;

  //#region 2wayDatabinding
  //2way databinding for parent of MatCuppleDatepickerComponent
  @Input() set price(value: string) {
    if (!value) return;
    this.priceInput = value;
  }
  @Output() priceChange = new EventEmitter<string>();
  onBlur(event: FocusEvent) {
    this.priceChange.emit(this.priceInput);
  }

  //#endregion

  onKeyup(event: KeyboardEvent) {
    if (event.key == '+') {
      // const oldValue = this.priceFormControl.getRawValue() ?? 0;
      //this.priceFormControl.setValue(this.priceInput+'000');
      this.priceInput = this.priceInput * 1000;
    }
  }
}
